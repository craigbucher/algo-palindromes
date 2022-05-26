def palindrome(word):
    # needed for re.sub
    import re
    # ensure that word is string type
    word = str(word)
    # remove non-alphannumeric characters
    string = re.sub(r"[^a-zA-Z0-9]", "", word)
    # convert to lower case
    string = string.lower()
    # a single letter is technically a palindrome 
    if len(string) == 1:
        return true
    # call the helper function to check if string is equal to its reverse
    #print(rev_string(string))
    return (string == rev_string(string)) 

def rev_string(str):
    str_arr = list(str)
    str_arr.reverse()
    return ''.join(str_arr)

print(palindrome('434'))