var mouse_event = "empty"
var last_x, last_y
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d")
var color= "Gray"
var width_line= 2
canvas.addEventListener("mousedown", My_mouse_down)
 function My_mouse_down(e){
     mouse_event= "mousedown"
 }
  canvas.addEventListener("mouseleave", My_mouse_leave)
  function My_mouse_leave(e){
      mouse_event= "mouseleave"
  }
  canvas.addEventListener("mouseup", My_mouse_up)
 function My_mouse_up(e){
     mouse_event= "mouseup"}
     canvas.addEventListener("mousemove", My_mouse_move)
     function My_mouse_move(e){
     current_position_mouse_x = e.clientX- canvas.offsetLeft;
     current_position_mouse_y = e.clientY- canvas.offsetTop
     if ( mouse_event == "mousedown") {
         ctx.beginPath()
         ctx.strokeStyle= color
         ctx.lineWidth= width_line
         ctx.moveTo(last_x,last_y)
         ctx.lineTo(current_position_mouse_x,current_position_mouse_y)
         ctx.stroke()} 
         last_x = current_position_mouse_x
         last_y = current_position_mouse_y 
     }
     function Clear(){
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)    
     }

  