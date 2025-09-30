import React, { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars = [];
    const starCount = 200;
    const starSpeed = 0.2;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
        this.pz = this.z;
      }

      update() {
        this.z -= starSpeed;
        if (this.z < 1) {
          this.z = canvas.width;
          this.x = Math.random() * canvas.width - canvas.width / 2;
          this.y = Math.random() * canvas.height - canvas.height / 2;
          this.pz = this.z;
        }
      }

      draw() {
        const sx = (this.x / this.z) * canvas.width / 2 + canvas.width / 2;
        const sy = (this.y / this.z) * canvas.height / 2 + canvas.height / 2;
        const r = Math.max(0.1, (1 - this.z / canvas.width) * 2.5);

        const psx = (this.x / this.pz) * canvas.width / 2 + canvas.width / 2;
        const psy = (this.y / this.pz) * canvas.height / 2 + canvas.height / 2;
        
        ctx.beginPath();
        ctx.moveTo(psx, psy);
        ctx.lineTo(sx, sy);
        ctx.lineWidth = r;
        ctx.strokeStyle = `rgba(0, 191, 255, ${1 - this.z / canvas.width})`;
        ctx.stroke();

        this.pz = this.z;
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 15, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-bg"
    />
  );
};

export default StarfieldBackground;