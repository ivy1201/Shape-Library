	/**
		五角星
		x:五角星所在同心圆横坐标
		y:五角星所在同心圆纵坐标
		r:同心圆小圆半径
		R:同心圆大圆半径
		rota:旋转角度
	**/
	function drawStar(ctx,x,y,r,R,rota) {
		ctx.beginPath();
		for (var i =0; i < 5; i++) {
			ctx.lineTo(Math.cos((18 + i * 72 - rota)/ 180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - rota) / 180 * Math.PI) * R + y);
			ctx.lineTo(Math.cos((54 + i * 72 - rota)/ 180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - rota) / 180 * Math.PI) * r + y);
		}
		ctx.closePath();
		ctx.stroke();
	}
	/**
		正六边形
		r:正六边形所在圆半径
		x:正六边形所在圆横坐标
		y:正六边形所在圆纵坐标
		rota:旋转角度
	**/
	function drawHexagon(ctx,r,x,y, rota) {
		ctx.beginPath();
		for (var i = 0; i < 6; i++){
			ctx.lineTo(x + r * Math.cos((60 * i - rota) / 180  * Math.PI), y - r * Math.sin((60 * i - rota) / 180  * Math.PI));
		}
		ctx.closePath();
		ctx.stroke();
	}
	/**
		正五边形
	**/
	function drawPentagon(ctx, x, y, r, rota) {
		ctx.beginPath();
		for (var i =0; i < 5; i++) {
			ctx.lineTo(Math.cos((18 + i * 72 - rota)/ 180 * Math.PI) * r + x, -Math.sin((18 + i * 72 - rota) / 180 * Math.PI) * r + y);
		}
		ctx.closePath();
		ctx.stroke();
	}
	/**
		正n边形
		x:正多边形所在圆横坐标
		y:正多边形所在圆纵坐标
		r:正多边形所在圆半径
		orig:正多边形在第一象限位于圆上与横轴最小夹角
		delta:两个相邻点之间的角度差
		rota:旋转角度
	**/
	function drawR(ctx, x, y, r, orig, delta, rota) {
		ctx.beginPath();
		for (var i =0; i < 5; i++) {
			ctx.lineTo(Math.cos((orig + i * delta - rota)/ 180 * Math.PI) * r + x, -Math.sin((orig + i * delta - rota) / 180 * Math.PI) * r + y);
		}
		ctx.closePath();
		ctx.stroke();
	}

	


