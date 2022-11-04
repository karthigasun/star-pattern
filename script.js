//Print a program for hollow-square
let str="",num=5;
for(i=0;i<num;i++){
	for(j=0;j<num;j++){
		if(i==0||i==num-1){
			str+="*";
			//console.log(str);
		}
		else{
			if(j==0||j==num-1){
				str+="*";
			//console.log(str);
		}
			 else{
				str+=" ";
			}
		}
	}
	str+="\n"
}

console.log(str);