function draw() {
    background(0);
    orbitControl();

    // Only draw if we have Spotify features
    if (!window.currentFeatures) {
        return; // nothing to draw yet
    }

    let energy = window.currentFeatures.energy;      
    let loudness = window.currentFeatures.loudness;  

    // Map features to Lorenz params
    a = 10 + energy * 50;
    b = 28 + Math.abs(loudness) / 2;
    c = 8/3;

    lorenz();

    noFill();
    beginShape();
    for (let i = 0; i < points.length; i++) {
        let v = points[i];
        stroke(
            map(i % 255, 0, 255, 0, 255),
            255,
            255
        );
        vertex(v.x * 5, v.y * 5, v.z * 5);
    }
    endShape();
}

if (!window.currentFeatures) {
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Waiting for music...", 0, 0);
    return;
}
