alert("자바 스크립트 대화상자");
dan = prompt("원하는 단", 2);
confirm("참 거짓을 결정하는 대화상자");

    document.writeln("<br><br>" + dan + "단 <br><br>");
    for(var i = 1; i < 10; i++)
    {
        document.write(dan + "x" + i + "=" + dan*i + "<br>");
    }
    document.writeln("");