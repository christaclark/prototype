
{
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "International Normalized Address",
    "description": "JSON Schema to define the normalized address components which PayPal would in turn receive from Address Doctor via Trinity service",
    "properties": {
        "parsed_elements": {
            "type": "object",
            "properties": {
                "street_number": {
                    "type": "string",
                    "description": "This is a required component for US address, but is really optional in case of UK.",
                    "maxLength": 300
                },
                "street_name": {
                    "type": "string",
                    "description": "This is street name.",
                    "minLength": 1,
                    "maxLength": 300
                },
                "building": {
                    "type": "string",
                    "description": "This is building info",
                    "maxLength": 300
                },
                "sub_building": {
                    "type": "string",
                    "description": "This is other building info or apartment number",
                    "maxLength": 300
                },
                "delivery_service": {
                    "type": "string",
                    "description": "This contains post office box or other rural routing information",
                    "maxLength": 300
                },
                "locality": {
                    "description": "This could be city or town or village",
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 300
                },
                "province": {
                    "type": "string",
                    "description": "This could be state or province. This is the 2 character state code for US and could be more than 2 char for UK and DE.",
                    "maxLength": 300
                },
                "postal_code": {
                    "type": "string",
                    "description": "This is zip code (US) or postal code (UK, DE). The UK postal codes could be longer than 9 and are alphanumeric whereas US zipcodes are numeric and could be 5 or 9 digits in length, postal codes in DE are numeric and 5 digits in length",
                    "maxLength": 60
                },
                "country_code": {
                    "$ref": "country_code.json"
                }
            },
            "required": [
                "country_code",
                "locality"
            ]
        },
        "address_lines": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
}