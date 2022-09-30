export class App {
    constructor (){
    // Le constructeur permet de créer des propriétés et de les initialiser
    this.canvas = document.getElementById('my-canvas');
    this.context = this.canvas.getContext('2d');
    this.isDrawing = false;
    this.x = 0;
    this.y = 0;
    this.currentSize = 1;
    this.eraser = document.querySelector('.erase');
    // On lance aussi tout ce qu'on doit faire lors du chargement de la page
     this.init();
        
    
    }

    init() {
        // Installation du gestionnaire d'événement au click sur le canvas
        this.canvas.addEventListener('mousedown', this.onStart.bind(this));
        this.canvas.addEventListener('mouseup', this.onStop.bind(this));
        this.canvas.addEventListener('mousemove', this.onMove.bind(this));
        this.eraser.addEventListener('click',this.eraseLine.bind(this));
        const colorBtn = document.querySelectorAll('.color');
        for(const btn of colorBtn){
            btn.addEventListener('click',this.onClickColorButton.bind(this));
        }

        // this.eraser.addEventListener('click',this.eraseLine.bind(this))
    }
    onClickColorButton(event){
        const color = event.currentTarget.dataset.color;
        this.context.strokeStyle = color ;
        this.context.lineWidth = this.currentSize;
    }

   onStart(event){
    
        this.x = event.offsetX ;
        this.y = event.offsetY;
        this.isDrawing = true;
      };

    onStop(event){
        this.isDrawing = false;
    }
    

    onMove(event){
        if(this.isDrawing){
            this.drawLine(event.offsetX,event.offsetY);
        }
    }

     drawLine(newX,newY) {
        this.context.stroke();
        this.context.beginPath();
        this.context.closePath();
        this.context.moveTo(this.x,this.y);
        this.context.lineTo(newX,newY);
        this.x = newX;
        this.y= newY;
}

    eraseLine(){

        this.context.strokeStyle = 'white'; 
        this.context.lineWidth = 10;

        
    }
    
    
   }
    
    

