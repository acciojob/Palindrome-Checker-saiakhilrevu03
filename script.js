// complete the given function

function palindrome(str){
	let left=0,right=str.length-1;
	while(left<right){
		if(str[left]!=str[right]){
			return false;
		}
		left++;
		right--;
	}
	return true;
  }
const str = prompt('enter a string');  
	alert(palindrome(str));
 module.exports = palindrome
