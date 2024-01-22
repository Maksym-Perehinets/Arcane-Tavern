import json
import os

# Used to make this work when importing JsonParser
# Have no faking idea how to make it work other way
script_dir = os.path.dirname(os.path.realpath(__file__))
os.chdir(script_dir)

"""
If you diceded to use this paser pleas initiate 
a class with inputting a path to your index.json
like this example = JsonParser('./path/to/your/index.json')
after that you are welcome to use it but do not forget 
to store spells_fson folder in same folder as your parser
"""


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
        returns all sources for easy input to database with sqlalchemy
		:return only keys from json_file as list of dictionaries:
		"""
        result = []
        for book_name in self.json_files.keys():
            result.append({'book_name': book_name})
        return result

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


