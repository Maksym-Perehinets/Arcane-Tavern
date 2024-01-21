import json

list_of_links = ['./spells_json/index.json', './spells_json/spells-aag.json', './spells_json/spells-ai.json',
                 './spells_json/spells-aitfr-avt.json', './spells_json/spells-egw.json',
                 './spells_json/spells-ftd.json',
                 './spells_json/spells-ggr.json', './spells_json/spells-idrotf.json',
                 './spells_json/spells-llk.json', './spells_json/spells-phb.json', './spells_json/spells-sato.json',
                 './spells_json/spells-scc.json', './spells_json/spells-tce.json', './spells_json/spells-tdcsr.json',
                 './spells_json/spells-ua-2020por.json', './spells_json/spells-ua-2020smt.json',
                 './spells_json/spells-ua-2021do.json', './spells_json/spells-ua-2022wotm.json',
                 './spells_json/spells-ua-ar.json', './spells_json/spells-ua-frw.json',
                 './spells_json/spells-ua-mm.json',
                 './spells_json/spells-ua-saw.json', './spells_json/spells-ua-ss.json',
                 './spells_json/spells-ua-tobm.json',
                 './spells_json/spells-xge.json', ]
a = {
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
    ]
}


class JsonParser:

    def __init__(self, index_file):
        """
        :param index_file:
        get all files path from index.json file
        and converts them to  accessible dict from any other function
        dict: key(book_name) value current path to book.json
        """
        self.json_files = dict()
        self.wanted_data = ['name', 'source', 'page', 'level', 'school', 'time', 'range', 'components', 'duration']
        with open(index_file, 'r') as opened_index:
            for key, value in json.load(opened_index).items():
                self.json_files[key] = f"./spells_json/{value}"

    def __json_filter(self, json_data, book_name=None):
        """
        :param json_data:
        :param book_name:
        :return result as dict with all needed data:
        """
        result = dict()
        # looks for wanted data in json that was passed to filter
        for key, value in json_data.items():
            # if key is in wanted data list than its appends to
            if key in self.wanted_data:
                result[key] = value
                if key == 'name':
                    with open('./spells_json/sources.json', 'r') as opened_json:
                        data = json.load(opened_json)
                        try:
                            result['class'] = data[book_name][value]['class']
                        except KeyError:
                            result['class'] = [{"name": "Wizard", "source": "PHB"}]
                else:
                    pass
        return result


    def get_all_sources(self):
        """
		:return only keys from json_file variable as list of strings:
		"""
        return list(self.json_files.keys())

    def get_all_ranges(self):
        """
		Get all ranges from all spell file
		:param self.json_files:
		:return a list of unique spell ranges:
		"""
        unique_ranges = []

        for json_file in self.json_files.values():
            with open(json_file, 'r') as open_json_file:
                for spell in json.load(open_json_file).get('spell', []):
                    range_dict = spell.get('range')
                    if range_dict is not None:
                        # Convert the dictionary to a JSON string for comparison
                        range_str = json.dumps(range_dict, sort_keys=True)

                        # Check if the JSON string is already in unique_ranges
                        if range_str not in [json.dumps(r, sort_keys=True) for r in unique_ranges]:
                            unique_ranges.append(range_dict)

        return unique_ranges

    def get_all_durations(self):
        """
		Get all durations from all spell file
		:param self.json_files:
		:return: list of dictionaries containing unique durations
		"""
        unique_ranges = []

        for json_file in self.json_files.values():
            with open(json_file, 'r') as open_json_file:
                for spell in json.load(open_json_file).get('spell', []):
                    range_dict = spell.get('duration')
                    if range_dict is not None:
                        # Convert the dictionary to a JSON string for comparison
                        range_str = json.dumps(range_dict, sort_keys=True)

                        # Check if the JSON string is already in unique_ranges
                        if range_str not in [json.dumps(r, sort_keys=True) for r in unique_ranges]:
                            unique_ranges.append(range_dict)

        return unique_ranges

    def get_all_spells(self):
        """
        :return:
        """
        spell_list = list()
        for key, json_file in self.json_files.items():
            with open(json_file, 'r') as open_json_file:
                for spell in json.load(open_json_file).get('spell'):

                    spell_list.append(self.__json_filter(spell, key))

        return spell_list


get_data = JsonParser('./spells_json/index.json')
print(get_data.get_all_sources())
