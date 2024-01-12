import mysql
import json
import os, sys

class Parser:
        def index_parse(self):
                with open('spells-json/index.json', 'r') as f:
                        data = json.load(f)
                index_list = list(data.keys())
                return index_list
        def sources_parse(self):
                with open("F:/github2/spells-json/sources.json", "r") as file:
                        data = json.load(file)

                all_sources = []

                for top_key, top_value in data.items():
                        if isinstance(top_value, dict):
                                for spell_name, spell_info in top_value.items():
                                        class_array = spell_info.get("class", [])

                                        for entry in class_array:
                                                source_value = entry.get("source")
                                                if source_value:
                                                        all_sources.append(source_value)

                return all_sources



parser_instance = Parser()
parser_instance.sources_parse()