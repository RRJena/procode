

/*=============================================================
    PRO IDE: FULLY EDITED AND RE-USED
    AUTHOR: RAKESH RANJAN JENA
    WEBSITE: WWW.RRJ.WORLD,WWW.RRJPRINCE.COM
    FACEBOOK: WWW.FACEBOOK.COM/RRJ.PRINCE
    EMAIL: RAKESHRANJANJENA007@GMAIL.COM
    EMAIL:RRJPRINCE@RRJPRINCE.COM
    THANKS TO GOD AND MY MOM AND ALSO THE PEOPLE OVER INTERNET AND AROUND ME, WHO BLESSED ME FOR THIS.
    SPECIAL THANKS TO GOOGLE AND THID WEBLAYOUT THEME PROVIDER
   
    ========================================================  */

 Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');
  var page_xml;
  var xml_text;
  var re_xml;
//Dynamic Modal for View code and run Output
//Detect Zoom of Page and Device and refrest automatically
  var zoom;
  var device;
  var prevZoomLevel,currZoomLevel;
prevZoomLevel=detectZoom.device();
while(1){
   zoom = detectZoom.zoom();
   device = detectZoom.device();
   currZoomLevel=device;
    //Store Data in Local Storage
    
    
          page_xml = Blockly.Xml.workspaceToDom(workspacePlayground);
          xml_text = Blockly.Xml.domToText(page_xml);
          xml_text = localStorage.getItem("blockly");  
          localStorage.setItem("blockly",xml_text);
   //if zoom level changed then invode refresh and save data in local storage 
    if(currZoomLevel!=prevZoomLevel)
        {
          page_xml = Blockly.Xml.workspaceToDom(workspacePlayground);
          xml_text = Blockly.Xml.domToText(page_xml);
          localStorage.setItem("blockly",xml_text);  
          //alert(xml_text);
          window.location.reload(true);   
          console.log(zoom, device); 
     
        }
    
    
    //Load Workspace data automatically
 
}

//def on reload get program saved in local storage and place on Workspace
function page_onReload(){
    
     xml_text = localStorage.getItem("blockly");
     if (xml_text) {
        re_xml = Blockly.Xml.textToDom(xml_text);
         //alert(re_xml);
        Blockly.Xml.domToWorkspace(workspacePlayground, re_xml);
       }
    
    
}
//def to convert blockly to various codes
function convertToPro(proLang)
{
    
    var code;
    var lang;
    lang=proLang;
    //alert(lang);
    switch(lang)
           {
           case "Java Script":
           {      
      window.LoopTrap = 1000;
      Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';        
      Blockly.JavaScript.addReservedWords('code');
      code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
     document.getElementById('code_js').innerHTML="<pre><code><textarea style='width:100%;height:1000px' readonly>"+code+"</textarea></pre></code>";     
         
           
           }break;
                   
            case "Python":
           {
      code = Blockly.Python.workspaceToCode(workspacePlayground);
      //alert(code);
        document.getElementById('code_py').innerHTML="<pre><code><textarea style='width:100%;height:1000px' readonly>"+code+"</textarea></pre></code>";        
           }break;
           case "PHP":
           {
      code = Blockly.PHP.workspaceToCode(workspacePlayground);
      //alert(code);
         document.getElementById('code_php').innerHTML="<pre><code><textarea style='width:100%;height:1000px' readonly>"+code+"</textarea></pre></code>";      
           }break;               
           case "Lua":
           {
      code = Blockly.Lua.workspaceToCode(workspacePlayground);
                 document.getElementById('code_lua').innerHTML="<pre><code><textarea style='width:100%;height:1000px' readonly>"+code+"</textarea></pre></code>";     
      //alert(code);
               
           }break;         
            case "Dart":
           {
      code = Blockly.Dart.workspaceToCode(workspacePlayground);
      //alert(code);
         document.getElementById('code_dart').innerHTML="<pre><code><textarea style='width:100%;height:1000px' readonly>"+code+"</textarea></pre></code>";     
           }break;   
                   
        case "XML":
           {
      var xmlDom = Blockly.Xml.workspaceToDom(workspacePlayground);
      code = Blockly.Xml.domToPrettyText(xmlDom);
      //alert(code);
          document.getElementById('code_xml').innerHTML="<pre><code><textarea style='width:100%;height:1000px' readonly>"+code+"</textarea></pre></code>";     
           }break;  
           default:
           {
       
           }break;
           }
    
      /**/
    
}
//------------------------------------------------- For Variable Block Change by 1 code---------------------//
//for inc/dec by 1 block for JS
Blockly.JavaScript['changes_by'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_inc = block.getFieldValue('inc');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+"="+variable_name+dropdown_inc+value_name+';\n';
  return code;
}; 

//for py
Blockly.Python['changes_by'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_inc = block.getFieldValue('inc');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_name+"="+variable_name+dropdown_inc+value_name+'\n';
  return code;
};

//for php
Blockly.PHP['changes_by'] = function(block) {
  var variable_name = Blockly.PHP.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_inc = block.getFieldValue('inc');
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = variable_name+"="+variable_name+dropdown_inc+value_name+';\n';
  return code;
};

//for Lua
Blockly.Lua['changes_by'] = function(block) {
  var variable_name = Blockly.Lua.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_inc = block.getFieldValue('inc');
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
   var code = variable_name+"="+variable_name+dropdown_inc+value_name+';\n';
  return code;
};
// for Dart
Blockly.Dart['changes_by'] = function(block) {
  var variable_name = Blockly.Dart.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_inc = block.getFieldValue('inc');
  var value_name = Blockly.Dart.valueToCode(block, 'NAME', Blockly.Dart.ORDER_ATOMIC);
  // TODO: Assemble Dart into code variable.
 var code = variable_name+"="+variable_name+dropdown_inc+value_name+';\n';
  return code;
};

//-----------------------------------------------------------------------------------------------------//
//def of function to run code
function runCode(){  
 
  /*var code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
      document.getElementById().innerHTML=eval(code);
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }*/
    
    
    var code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
     Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
//var myInterpreter = new Interpreter(code);
// document.getElementById("code_run").innerHTML="hello"
    document.getElementById("code_run").innerHTML ="";
      document.getElementById("code_run").innerHTML="HELLO";
   var outputArea = document.getElementById('code_run');
    alert(text);
    var myInterpreter = null;

    function initApi(interpreter, scope) {
      // Add an API function for the alert() block, generated for "text_print" blocks.
      interpreter.setProperty(scope, 'alert',
          interpreter.createNativeFunction(function(text) {
        text = text ? text.toString() : '';
        document.getElementById("code_run").innerHTML += '\n' + text;
      }));

      // Add an API function for the prompt() block.
      var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(prompt(text));
      };
      interpreter.setProperty(scope, 'prompt',
          interpreter.createNativeFunction(wrapper));

      // Add an API function for highlighting blocks.
      var wrapper = function(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(highlightBlock(id));
      };
      interpreter.setProperty(scope, 'highlightBlock',
          interpreter.createNativeFunction(wrapper));
    }  
var myInterpreter = new Interpreter(code, initApi);  
    myInterpreter.run();

}

function clearWorkspace()
{
    
  Blockly.mainWorkspace.clear();
    
}