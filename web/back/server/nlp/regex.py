import re

import re

def regex_date(text):
    pattern = r'วันที่ (\d{1,2}) (มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม) พ.ศ.(\d{4})\b|' \
              r'วันที่ (\d{1,2}) (มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม) (\d{4})\b|' \
              r'(\d{1,2}) (มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม) (\d{4})|' \
              r'(\d{1,2})([/-])(\d{1,2})([/-])(\d{2,4})|' \
              r'(\d{1,2}) (ม.ค.|ก.พ.|มี.ค.|เม.ย.|พ.ค.|มิ.ย.|ก.ค.|ส.ค.|ก.ย.|ต.ค.|พ.ย.|ธ.ค.) (\d{2,4})'
    
    matches = re.findall(pattern, text)
    
    # Filter out empty groups and join date components, keeping separators
    results = []
    for match in matches:
        if match[0]:
            results.append(f'วันที่ {match[0]} {match[1]} พ.ศ.{match[2]}')
        elif match[3]:
            results.append(f'วันที่ {match[3]} {match[4]} {match[5]}')
        elif match[6]:
            results.append(f'{match[6]} {match[7]} {match[8]}')
        elif match[9]:
            results.append(f'{match[9]}{match[10]}{match[11]}{match[12]}{match[13]}')
        elif match[14]:
            results.append(f'{match[14]} {match[15]} {match[16]}')
    
    return set(results)

def regex_party(text):
    # Define the pattern to match both "โจทร์ที่" and "จำเลยที่"
    pattern = r'(โจทร์ที่ \d+(?: และ \d+)?|จำเลยที่ \d+(?: และ \d+)?)'
    
    # Find all matches
    matches = re.findall(pattern, text)
    
    return set(matches)