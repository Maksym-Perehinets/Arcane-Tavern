import json


class Service:
    def __init__(self):
        pass

    def format_result_for_all_spells(self, data):
        formatted_result = [
            {
                "id": spell.id,
                "name": spell.spell_name,
                "level": spell.spell_level,
                "components": spell.components,
                # Duration type, time, concentration
                "duration": {
                    "type": duration.duration_type,
                    "time": duration.duration_time,
                    "concentration": duration.concentration
                },
                "time": spell.cast_time,
                # Range with
                "ranges": {
                    "type": ranges.shape,
                    "distance": {
                        "type": ranges.distance_type,
                        "amount": ranges.distance_range
                    }
                }
            }
            for spell, source, duration, ranges in data
        ]
        return formatted_result


    def format_spell(self, data):
        formatted_result = [
            {
                "id": spell.id,
                "name": spell.spell_name,
                "source": source,
                "page": spell.book_page,
                "level": spell.spell_level,
                "school": spell.school,
                "components": spell.components,
                # Duration type, time, concentration
                "duration": {
                    "type": duration.duration_type,
                    "time": duration.duration_time,
                    "concentration": duration.concentration
                },
                "time": spell.cast_time,
                # Range with
                "ranges": {
                    "type": ranges.shape,
                    "distance": {
                        "type": ranges.distance_type,
                        "amount": ranges.distance_range
                    }
                },
                "casters": spell.suitable_casters,
                "description": spell.spell_description,
                "descriptionOnHigherLevels": spell.entries_higher_level
            }
            for spell, source, duration, ranges in data
        ]
        return formatted_result

    def casting_type_for_comperation(self, casting_type, casting_time):
        return json.dumps([{"number": int(casting_time), "unit": casting_type}])
