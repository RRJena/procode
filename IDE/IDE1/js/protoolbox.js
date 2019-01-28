

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



var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspacePlayground=''; 
var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  };
function loadWorkspace()
{
blocklyArea = document.getElementById('blocklyArea');
blocklyDiv = document.getElementById('blocklyDiv');
workspacePlayground=''; 
  workspacePlayground = Blockly.inject(blocklyDiv,
      {toolbox: document.getElementById('toolbox'),
      comments:true,
      scrollbars:true,
	  collapse : true, 
      comments : true, 
	  disable : true, 
	  maxBlocks : Infinity, 
	  horizontalLayout : false, 
	  toolboxPosition : 'start', 
	css : true, 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true,
      zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2},
       grid:
         {spacing: 20,
          length: 3,
          colour: 'gold',
          snap: true},
       trashcan:true });
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspacePlayground);
}
  //Function Definced below to Add Logic Blocks into the Toolbox Panel Dynamically
function getLogic(){     
    workspacePlayground.updateToolbox("<category name='%{BKY_CATLOGIC}' colour='%{BKY_LOGIC_HUE}'><block type='controls_if'></block>      <block type='logic_compare'></block>      <block type='logic_operation'></block> <block type='logic_negate'></block>      <block type='logic_boolean'></block>      <block type='logic_null'></block>     <block type='logic_ternary'></block>    </category>");
                    }
                        
    //Function Definced below to Add Loops Blocks into the Toolbox Panel Dynamically                      
function getLoopBlock(){     
             
workspacePlayground.updateToolbox(" <category name='%{BKY_CATLOOPS}' colour='%{BKY_LOOPS_HUE}'><block type='controls_repeat_ext'>        <value name='TIMES'>          <shadow type='math_number'>            <field name='NUM'>10</field>          </shadow>        </value>      </block>      <block type='controls_whileUntil'></block>      <block type='controls_for'>        <value name='FROM'>          <shadow type='math_number'>            <field name='NUM'>1</field>          </shadow>        </value>        <value name='TO'>          <shadow type='math_number'>            <field name='NUM'>10</field>          </shadow>        </value>        <value name='BY'>          <shadow type='math_number'>            <field name='NUM'>1</field>          </shadow>        </value>      </block>      <block type='controls_forEach'></block>      <block type='controls_flow_statements'></block>    </category>                            ");
     
                      }

//Function Definced below to Add Math Blocks into the Toolbox Panel Dynamically

function getMathBlock(){     
             
workspacePlayground.updateToolbox(" <category name='%{BKY_CATMATH}' colour='%{BKY_MATH_HUE}'>      <block type='math_number'></block>      <block type='math_arithmetic'>        <value name='A'>          <shadow type='math_number'>            <field name='NUM'>1</field>          </shadow>        </value>        <value name='B'>          <shadow type='math_number'>            <field name='NUM'>1</field>          </shadow>        </value>      </block>      <block type='math_single'>        <value name='NUM'>          <shadow type='math_number'>            <field name='NUM'>9</field>          </shadow>        </value>      </block>      <block type='math_trig'>        <value name='NUM'>          <shadow type='math_number'>            <field name='NUM'>45</field>          </shadow>        </value>      </block>      <block type='math_constant'></block>      <block type='math_number_property'>        <value name='NUMBER_TO_CHECK'>          <shadow type='math_number'>            <field name='NUM'>0</field>          </shadow>        </value>      </block>      <block type='math_round'>        <value name='NUM'>         <shadow type='math_number'>            <field name='NUM'>3.1</field>          </shadow>        </value>      </block>      <block type='math_on_list'></block>      <block type='math_modulo'>        <value name='DIVIDEND'>          <shadow type='math_number'>            <field name='NUM'>64</field>          </shadow>        </value>        <value name='DIVISOR'>          <shadow type='math_number'>            <field name='NUM'>10</field>          </shadow>        </value>      </block>      <block type='math_constrain'>       <value name='VALUE'>          <shadow type='math_number'>            <field name='NUM'>50</field>          </shadow>        </value>        <value name='LOW'>          <shadow type='math_number'>            <field name='NUM'>1</field>          </shadow>        </value>        <value name='HIGH'>          <shadow type='math_number'>            <field name='NUM'>100</field>          </shadow>        </value>      </block>      <block type='math_random_int'>        <value name='FROM'>          <shadow type='math_number'>            <field name='NUM'>1</field>          </shadow>        </value>        <value name='TO'>          <shadow type='math_number'>            <field name='NUM'>100</field>          </shadow>        </value>      </block>      <block type='math_random_float'></block>    </category> ");
     
                      }

//Function Definced below to Add Text Blocks into the Toolbox Panel Dynamically

function getTextBlock(){     
             
workspacePlayground.updateToolbox("<category name='%{BKY_CATTEXT}' colour='%{BKY_TEXTS_HUE}'>      <block type='text'></block>      <block type='text_join'></block>      <block type='text_append'>        <value name='TEXT'>          <shadow type='text'></shadow>        </value>      </block>      <block type='text_length'>        <value name='VALUE'>          <shadow type='text'>            <field name='TEXT'>abc</field>          </shadow>        </value>      </block>      <block type='text_isEmpty'>        <value name='VALUE'>          <shadow type='text'>            <field name='TEXT'></field>          </shadow>        </value>      </block>      <block type='text_indexOf'>        <value name='VALUE'>          <block type='variables_get'>            <field name='VAR'>{textVariable}</field>          </block>        </value>        <value name='FIND'>          <shadow type='text'>            <field name='TEXT'>abc</field>          </shadow>        </value>      </block>      <block type='text_charAt'>        <value name='VALUE'>          <block type='variables_get'>            <field name='VAR'>{textVariable}</field>          </block>        </value>      </block>      <block type='text_getSubstring'>        <value name='STRING'>          <block type='variables_get'>            <field name='VAR'>{textVariable}</field>          </block>        </value>      </block>      <block type='text_changeCase'>        <value name='TEXT'>          <shadow type='text'>            <field name='TEXT'>abc</field>          </shadow>        </value>      </block>      <block type='text_trim'>        <value name='TEXT'>          <shadow type='text'>            <field name='TEXT'>abc</field>          </shadow>        </value>      </block>      <block type='text_print'>        <value name='TEXT'>          <shadow type='text'>            <field name='TEXT'>abc</field>          </shadow>        </value>      </block>      <block type='text_prompt_ext'>        <value name='TEXT'>          <shadow type='text'>            <field name='TEXT'>abc</field>  </shadow>        </value>      </block>    </category>");
     
                      }

//Function Definced below to Add List Blocks into the Toolbox Panel Dynamically

function getListBlock(){     
             
workspacePlayground.updateToolbox("<category name='%{BKY_CATLISTS}' colour='%{BKY_LISTS_HUE}'>      <block type='lists_create_with'>        <mutation items='0'></mutation>      </block>      <block type='lists_create_with'></block>      <block type='lists_repeat'>        <value name='NUM'>          <shadow type='math_number'>            <field name='NUM'>5</field>          </shadow>        </value>      </block>      <block type='lists_length'></block>      <block type='lists_isEmpty'></block>      <block type='lists_indexOf'>        <value name='VALUE'>          <block type='variables_get'>            <field name='VAR'>{listVariable}</field>          </block>        </value>      </block>      <block type='lists_getIndex'>        <value name='VALUE'>          <block type='variables_get'>            <field name='VAR'>{listVariable}</field>          </block>        </value>      </block>      <block type='lists_setIndex'>        <value name='LIST'>          <block type='variables_get'>            <field name='VAR'>{listVariable}</field>          </block>        </value>      </block>      <block type='lists_getSublist'>        <value name='LIST'>          <block type='variables_get'>            <field name='VAR'>{listVariable}</field>          </block>        </value>      </block>      <block type='lists_split'>        <value name='DELIM'>          <shadow type='text'>            <field name='TEXT'>,</field>          </shadow>        </value>      </block>      <block type='lists_sort'></block>    </category> ");
     
                      }

//Function Definced below to Add Color Blocks into the Toolbox Panel Dynamically

function getColorBlock(){     
             
workspacePlayground.updateToolbox("<category name='%{BKY_CATCOLOUR}' colour='%{BKY_COLOUR_HUE}'>      <block type='colour_picker'></block>      <block type='colour_random'></block>      <block type='colour_rgb'>        <value name='RED'>          <shadow type='math_number'>            <field name='NUM'>100</field>          </shadow>        </value>        <value name='GREEN'>          <shadow type='math_number'>            <field name='NUM'>50</field>          </shadow>        </value>        <value name='BLUE'>          <shadow type='math_number'>            <field name='NUM'>0</field>          </shadow>        </value>      </block>      <block type='colour_blend'>        <value name='COLOUR1'>          <shadow type='colour_picker'>            <field name='COLOUR'>#ff0000</field>          </shadow>        </value>        <value name='COLOUR2'>          <shadow type='colour_picker'>            <field name='COLOUR'>#3333ff</field>          </shadow>        </value>        <value name='RATIO'>          <shadow type='math_number'>            <field name='NUM'>0.5</field>          </shadow>        </value>      </block>    </category>  ");
     
                      }


//Function Definced below to Add Variable Blocks into the Toolbox Panel Dynamically

function getVariableBlock(){     
             
workspacePlayground.updateToolbox("<category name='%{BKY_CATVARIABLES}' colour='%{BKY_VARIABLES_HUE}' custom='VARIABLE'> <block type='variables_get'></block><block type='variables_set'></block><block type='changes_by'></block></category>");

Blockly.WorkspaceSvg.prototype.refreshToolboxSelection_ = function() {
  if (this.toolbox_ && this.toolbox_.flyout_ && !this.currentGesture_) {
    this.toolbox_.refreshSelection();
  }
};
       }
 
     


//Function Definced below to Function Blocks into the Toolbox Panel Dynamically
var fun;
function getFunctionBlock(){     
       fun="";    

workspacePlayground.updateToolbox("<category name='%{BKY_CATFUNCTIONS}' colour='%{BKY_PROCEDURES_HUE}' custom='PROCEDURE'><block type='procedures_defnoreturn'></block><block type='procedures_defreturn'></block><block type='procedures_ifreturn'></block><block type='func_call'></block> </category>");
    
    
    

}

// Extra Block for Variable Category
Blockly.Blocks['changes_by'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Change Variable")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField("By");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["SelectOne","Select one"], ["+","+"], ["-","-"]]), "inc");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Change Variable By 1");
 this.setHelpUrl("http://www.procodeide.com");
  }
};




