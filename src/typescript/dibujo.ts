const canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('rayado');
var ctx:CanvasRenderingContext2D= <CanvasRenderingContext2D>canvas.getContext('2d');
var rect:DOMRectReadOnly = <DOMRectReadOnly>canvas.getBoundingClientRect();
var x:number=0,y:number=0,dibujando:boolean=false;
var arreglo:string[]
document.addEventListener('scroll',(e)=>{
    setTimeout(() => {
        console.log(e)
    }, 100);
    
})
document.addEventListener('pointerdown',(e)=>{
    console.log(e.pressure)
    if(e.pressure>0)
    {
        x=e.offsetX - rect.left;
        y= e.offsetY - rect.top;
        dibujando=true;
    }
    
})

document.addEventListener('pointermove',e=>{
    console.log(e.pressure)
    if(dibujando==true){
        dibujar_pen(x,e.offsetX-rect.left,y,e.offsetY-rect.top,e.pressure);
        x=e.offsetX-rect.left;
        y=e.offsetY-rect.top;
    }
})
document.addEventListener('pointerup',e=>{
    if(e.pressure==0)
    {
        if(dibujando==true){
            dibujar_pen(x,e.offsetX-rect.left,y,e.offsetY-rect.top,e.pressure);
            x=0;
            x=0;
            dibujando= false;
        }
    }
    
})
document.addEventListener('keypress',(e)=>{
    if(e.key=="e"){
        canvas.width= canvas.width*1.1;
        console.log("hola")
    }
})
window.onscroll
document.addEventListener('DOMContentLoaded',(e)=>{
   var canvas2:HTMLCanvasElement =<HTMLCanvasElement> document.getElementById("rayado");
    canvas2.width=800;
    canvas2.height=760;
})
document.addEventListener('mousedown',(e)=>{
    x=e.offsetX - rect.left;
    y= e.offsetY - rect.top;
    dibujando=true;
});
document.addEventListener('mousemove',(e)=>{
    if(dibujando==true){
        dibujar(x,e.offsetX-rect.left,y,e.offsetY-rect.top);
        x=e.offsetX-rect.left;
        y=e.offsetY-rect.top;
    }
});
document.addEventListener('mouseup',(e)=>{
    if(dibujando==true){
        dibujar(x,e.offsetX-rect.left,y,e.offsetY-rect.top);
        x=0;
        x=0;
        dibujando= false;
    }
});
function dibujar_pen(x1:number,x2:number,y1:number,y2:number,preassure:number)
{
    preassure+=.3;
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3*preassure;

    ctx.moveTo(x1, y1);
    ctx.lineCap="round";
    ctx.lineJoin="round";
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
function dibujar(x1:number,x2:number,y1:number,y2:number)
{
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 4;

    ctx.moveTo(x1, y1);
    ctx.lineCap="round";
    ctx.lineJoin="round";
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
