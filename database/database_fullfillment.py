from json_parser.parser import JsonParser

get_data = JsonParser('../json_parser/spells_json/index.json')
print(get_data.get_all_sources())