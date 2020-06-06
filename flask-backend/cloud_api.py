from google.cloud import language_v1
from google.cloud.language_v1 import enums

docscore = 0

class Analyzer:
    def __init__(self):
        pass

    # Sample code from Google
    def sample_analyze_entities(self, text_content):
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
            print(u"Representative name for the entity: {}".format(entity.name))
            # Get entity type, e.g. PERSON, LOCATION, ADDRESS, NUMBER, et al
            print(u"Entity type: {}".format(enums.Entity.Type(entity.type).name))
            # Get the salience score associated with the entity in the [0, 1.0] range
            print(u"Salience score: {}".format(entity.salience))
            # Loop over the metadata associated with entity. For many known entities,
            # the metadata is a Wikipedia URL (wikipedia_url) and Knowledge Graph MID (mid).
            # Some entity types may have additional metadata, e.g. ADDRESS entities
            # may have metadata for the address street_name, postal_code, et al.
            for metadata_name, metadata_value in entity.metadata.items():
                print(u"{}: {}".format(metadata_name, metadata_value))

            # Loop over the mentions of this entity in the input document.
            # The API currently supports proper noun mentions.
            #for mention in entity.mentions:
                #print(u"Mention text: {}".format(mention.text.content))
                # Get the mention type, e.g. PROPER for proper noun
                #print(
                #    u"Mention type: {}".format(enums.EntityMention.Type(mention.type).name)
                #)

        # Get the language of the text, which will be the same as
        # the language specified in the request or, if not specified,
        # the automatically-detected language.
        print(u"Language of the text: {}".format(response.language))

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
        new_text = "\n".join(new_text_list)
        return new_text


    def analyze_sentiment(self, text_content):
        """
        Analyzing Sentiment in a String

        Args:
          text_content The text content to analyze
        """

        result = dict()

        client = language_v1.LanguageServiceClient()

        type_ = enums.Document.Type.PLAIN_TEXT

        language = "en"
        document = {"content": self.process_text(text_content), "type": type_, "language": language}

        encoding_type = enums.EncodingType.UTF8

        response = client.analyze_sentiment(document, encoding_type=encoding_type)

        # Get overall sentiment of the input document
        docscore = response.document_sentiment.score
        result["docscore"] = docscore

        if docscore>-0.099:
            result["verdict"] = "NOT TOXIC"
        else:
            result["verdict"] = "TOXIC"

        return result
