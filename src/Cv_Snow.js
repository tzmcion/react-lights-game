export default function Cv_Snow(Parent, height, Max_size, Speed, Color, Quantity, zindex, img, width, top, left) {
    const parent = Parent;
    const max_size = Max_size === undefined ? 2 : Max_size;
    const speed = Speed === undefined ? 1.6 : Speed;
    const color = Color === undefined ? 'white' : Color;
    const zIndex = zindex === undefined ? -1 : zindex;
    const quantity = Quantity === undefined ? 50 : Quantity;
    const can = document.createElement('canvas');
    can.style.position = 'absolute';
    can.style.pointerEvents = 'none';
    can.width = parent.offsetWidth;
    can.height = height;
    can.style.left = (parent.offsetLeft).toString() + 'px';
    can.style.top = (parent.offsetTop).toString() + 'px';
    can.style.zIndex = zIndex;
    can.setAttribute('id', 'Cv_Snow');
    parent.append(can);
    const c = can.getContext('2d');
    var image;
    if (typeof img === 'string') {
        image = new Image();
        image.src = img;
    }
    else {
        image = img;
    }


    class Snowflake {
        constructor(x, y, sp, size) {
            this.pos_x = x;
            this.pos_y = y;
            this.v_x = sp / 5;
            this.v_y = Math.abs(sp);
            this.size = size;
        }

        update(size) {

            this.size = size === undefined ? this.size : size;
            this.pos_x += this.v_x;
            this.pos_y += this.v_y;
            if (this.pos_y > can.height) {
                this.pos_x = Math.random() * (can.width + 400) - 150;
                this.pos_y = -20;
            }
        }

        render() {
            c.beginPath();
            c.fillStyle = color;
            c.arc(this.pos_x, this.pos_y, this.size, 0, Math.PI * 2);
            c.fill();
        }
    }

    var snowFlakes = [];
    for (let x = 0; x < quantity; x++) {
        snowFlakes.push(new Snowflake(Math.random() * (can.width + 400) - 250, Math.random() * can.height * -1, Math.random() * speed + speed / 3, Math.random() * max_size + 1));
    }

    function Draw() {
        c.clearRect(0, 0, can.width, can.height);
        snowFlakes.map(e => {
            e.update();
            e.render();
            return true;
        })
        window.requestAnimationFrame(Draw);
    }
    Draw();
}

