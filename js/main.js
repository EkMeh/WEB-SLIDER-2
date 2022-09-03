var slb=document.querySelectorAll('.slb')
var prevBtn=document.getElementById('prevBtn');
var nextBtn=document.getElementById('nextBtn');
var indicators=document.getElementById('indicators');
var br=0;

function CreateLi()
{
    slb.forEach((sliderShow)=>{
        var li=document.createElement('li');
        indicators.appendChild(li);
    });
}

CreateLi()

var indiLi=document.querySelectorAll('#indicators li');

function CreateLiActive(n)
{
    indiLi.forEach((li)=>{
        li.classList.remove('active');
    });
    indiLi[n].classList.add('active');
}

CreateLiActive(br)

function showImg(n)
{
    slb.forEach((sliderShow)=>{
        sliderShow.classList.remove('active');
    });
    slb[n].classList.add('active');
}

function nextImg()
{
    if(br<slb.length-1)
    {
        br++;
    }else{
        br=0;
    }
    showImg(br);
    CreateLiActive(br);
}

function prevImg()
{
    if(br<=0)
    {
        br=slb.length-1;
    }else
    {
        br--;
    }
    showImg(br);
    CreateLiActive(br);
}

prevBtn.addEventListener('click', prevImg);
nextBtn.addEventListener('click', nextImg);

function liBtns()
{
    indiLi.forEach((li,i)=>{
        li.addEventListener('click', ()=>{
            br=i;
            showImg(br);
            CreateLiActive(br);
        });
    });
}

liBtns();

setInterval(()=>{
    nextImg();
    CreateLiActive(br);
}, 3000);