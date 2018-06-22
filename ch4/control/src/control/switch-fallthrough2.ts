let input2: number = 2;

switch (input2 % 2) {
    case 0: //noFallthroughCasesInSwitch 옵션이 true 일때도 가능한 경우
    case 1: 
        console.log("숫자 1");
        break;
}