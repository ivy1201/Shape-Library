	/**
		五角星(可复用代码)
	**/
	function drawShape(ctx,x,y,R,rota) {
		ctx.save();
		ctx.translate(x,y);
		ctx.rotate(rota / 180 * Math.PI);
		ctx.scale(R,R);
		starPath(); //画具体的图形
		ctx.fillStyle = "#fb5";
		ctx.fill();
		ctx.restore();
	}

	//单位圆
	function starPath() {
		ctx.beginPath();
		for (var i =0; i < 5; i++) {
			ctx.lineTo(Math.cos((18 + i * 72 - rota)/ 180 * Math.PI), -Math.sin((18 + i * 72 - rota) / 180 * Math.PI) );
			ctx.lineTo(Math.cos((54 + i * 72 - rota)/ 180 * Math.PI)  * 0.5, -Math.sin((54 + i * 72 - rota) / 180 * Math.PI)  * 0.5);
		}
		ctx.closePath();
	}

	//单位正六边形
	function hexagonPath() {
		ctx.beginPath();
		for (var i = 0; i < 6; i++){
			ctx.lineTo(Math.cos((60 * i) / 180  * Math.PI), Math.sin((60 * i) / 180  * Math.PI));
		}
		ctx.closePath();
		ctx.stroke();
	}

	//单位正五边形
	function drawPentagon() {
		ctx.beginPath();
		for (var i =0; i < 5; i++) {
			ctx.lineTo(Math.cos((18 + i * 72)/ 180 * Math.PI), -Math.sin((18 + i * 72) / 180 * Math.PI));
		}
		ctx.closePath();
		ctx.stroke();
	}

	/**
		单位正n边形
		orig:正多边形在第一象限位于圆上与横轴最小夹角
		delta:两个相邻点之间的角度差
	**/
	function drawR(orig, delta) {
		ctx.beginPath();
		for (var i =0; i < 5; i++) {
			ctx.lineTo(Math.cos((orig + i * delta)/ 180 * Math.PI), -Math.sin((orig + i * delta) / 180 * Math.PI));
		}
		ctx.closePath();
		ctx.stroke();
	}