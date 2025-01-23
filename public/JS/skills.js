

function showSkills(type) {
    
    document.querySelectorAll('.bar-segment').forEach(segment => {
        segment.classList.remove('active');
    });

    
    document.querySelector(`.bar-segment.${type}`).classList.add('active');

    
    document.querySelectorAll('.skills-content').forEach(content => {
        content.classList.remove('active');
    });

    
    document.getElementById(`${type}-skills`).classList.add('active');
}





