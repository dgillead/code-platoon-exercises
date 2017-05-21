=begin 
1) Given a 'num' and a character, print a right triangle that consists of 'num' lines of the character, starting with one character on the first line and increasing by one on each line. It should look like this:
*
**
***
****
*****
******
=end

def char_triangle(num, character)
  string = character
  while 0 < num
    puts string
    string += character
    num -= 1
  end
end

char_triangle(6, "*")

# 2) Given a string of words, sort by length, with the shortest words at the beginning.

def sort_by_length(string)
  sortedString = string.delete(".").split.sort_by{|word| word.length}.join(" ")
end

sort_by_length("This should be sorted by length with the shortest words first.")

# 3) Given an array of numbers and one number, delete that number from the array

def delete_num(array, num)
  array.delete(num)
  array
end 

delete_num([1, 2, 3, 4, 5], 2)

# 4) Given that same input, delete all numbers that are less than the number

def delete_nums_less_than(array, num)
  array.delete_if{|current_num| current_num < num}
  array
end

delete_nums_less_than([1, 2, 3, 4, 5], 4)
