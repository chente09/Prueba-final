document.getElementById('div1').addEventListener('mouseover', () => {
    document.getElementById('div2').style.backgroundColor = 'rgb(54, 104, 169)';
});

document.getElementById('div1').addEventListener('mouseout', () => {
    document.getElementById('div2').style.backgroundColor = '';
});