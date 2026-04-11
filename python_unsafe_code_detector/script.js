function analyze(){
let input=document.getElementById('input').value||"";
let insights="";

// dependency check
if(input.includes("requirements") || input.includes("==")){
  insights += "Dependencies detected. Check for outdated packages.<br>";
}

// unsafe code
if(input.includes("eval(") || input.includes("exec(")){
  insights += "Unsafe code execution detected.<br>";
}

// pickle risks
if(input.includes("pickle")){
  insights += "Pickle usage detected. Potential security risk.<br>";
}

if(!insights) insights="No obvious security issues detected.";

document.getElementById('result').innerHTML =
"<b>Security Analysis:</b><br>"+insights;
}
