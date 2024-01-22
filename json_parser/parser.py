import json


a ={
	"spell": [
		{
			"name": "Distort Value",
			"source": "AI",
			"page": 75,
			"level": 1,
			"school": "I",
			"time": [
				{
					"number": 1,
					"unit": "minute"
				}
			],
			"range": {
				"type": "point",
				"distance": {
					"type": "touch"
				}
			},
			"components": {
				"v": 'true'
			},
			"duration": [
				{
					"type": "timed",
					"duration": {
						"type": "hour",
						"amount": 8
					}
				}
			],
			"entries": [
				"Do you need to squeeze a few more gold pieces out of a merchant as you try to sell that weird octopus statue you liberated from the chaos temple? Do you need to downplay the worth of some magical assets when the tax collector stops by? Distort value has you covered.",
				"You cast this spell on an object no more than 1 foot on a side, doubling the object's perceived value by adding illusory flourishes or polish to it, or reducing its perceived value by half with the help of illusory scratches, dents, and other unsightly features. Anyone examining the object can ascertain its true value with a successful Intelligence ({@skill Investigation}) check against your spell save DC."
			],
			"entriesHigherLevel": [
				{
					"type": "entries",
					"name": "At Higher Levels",
					"entries": [
						"When you cast this spell using a spell slot of 2nd level or higher, the maximum size of the object increases by 1 foot for each slot level above 1st."
					]
				}
			]
		}
    }

class JsonParser:

    def get_all_sources(self, json_file):
        """
        Get all sources from
        :param json_file:
        :return only keys from that file as list of strings:
        other fields has no matter
        """
        with open(json_file, 'r') as json_file:
            data = json.load(json_file).keys()
        return list(data)


    def get_all_ranges(self, json_file):
        """
        Get all ranges from all spell file
        :param json_file:
        :return a list of :
        """
        data = []
        for o_json_file in json_file:
            with open(o_json_file, 'r') as open_json_file:
                for spell in json.load(open_json_file)['spell']:


        return data


get_data = JsonParser()
print(get_data.get_all_ranges(['./spells_json/spells-aag.json', './spells_json/spells-ai.json', './spells_json/spells-llk.json']))
