from google.cloud import language_v1
from google.cloud.language_v1 import enums



class Analyzer:
    def __init__(self):
        self.result = dict()

    # Sample code from Google
    def analyze_entities(self, text_content):
        entitylist = []
        """
        Analyzing Entities in a String

        Args:
          text_content The text content to analyze
        """
        client = language_v1.LanguageServiceClient()

        # Available types: PLAIN_TEXT, HTML
        type_ = enums.Document.Type.PLAIN_TEXT

        # Optional. If not specified, the language is automatically detected.
        # For list of supported languages:
        # https://cloud.google.com/natural-language/docs/languages
        language = "en"
        document = {"content": text_content, "type": type_, "language": language}

        # Available values: NONE, UTF8, UTF16, UTF32
        encoding_type = enums.EncodingType.UTF8

        response = client.analyze_entities(document, encoding_type=encoding_type)
        # Loop through entitites returned from the API
        for entity in response.entities:
            entitylist.append(entity.name)

        self.result["entities"] = entitylist

    def process_text(self, text_content):
        temp_text_list = text_content.split('\n')
        new_text_list = list()
        for line in temp_text_list:
            index = line.find(":")
            if(index != -1 and index < 23 and index > 0):
                new_text_list.append(line[index+1:].strip())
            else:
                if(line.strip() != ""):
                    new_text_list.append(line.strip())
        new_text = "\n\n".join(new_text_list)
        return new_text


    def analyze_sentiment(self, text_content):
        """
        Analyzing Sentiment in a String

        Args:
          text_content The text content to analyze
        """
        sentencelist = []
        scorelist = []


        client = language_v1.LanguageServiceClient()

        # Available types: PLAIN_TEXT, HTML
        type_ = enums.Document.Type.PLAIN_TEXT

        # Optional. If not specified, the language is automatically detected.
        # For list of supported languages:
        # https://cloud.google.com/natural-language/docs/languages
        language = "en"
        document = {"content": self.process_text(text_content), "type": type_, "language": language}

        # Available values: NONE, UTF8, UTF16, UTF32
        encoding_type = enums.EncodingType.UTF8

        response = client.analyze_sentiment(document, encoding_type=encoding_type)
        # Get overall sentiment of the input document
        docscore = response.document_sentiment.score
        docscoren = round(docscore,3)

        self.result["docscore"] = docscoren

        for sentence in response.sentences:
            sentencelist.append(sentence.text.content)
            scorelist.append(sentence.sentiment.score)

        if docscore>-0.099:
            self.result["verdict"] = "NOT TOXIC"
        else:
            self.result["verdict"] = "TOXIC"

        worstSentences = ['','','','','']
        worstScores = [99,99,99,99,99]
        low = 99
        index = 0

        for i in range(5):
            low = 99
            for x in range(len(sentencelist)):
                if (scorelist[x]<low):
                    worstScores[i] = round(scorelist[x], 3)
                    worstSentences[i] = sentencelist[x]

                    index = x
                    low = scorelist[x]

            sentencelist[index] = ''
            scorelist[index] = 99

        self.result["worstSent"] = worstSentences
        self.result["worstSco"] = worstScores
