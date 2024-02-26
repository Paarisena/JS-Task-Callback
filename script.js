const result = document.querySelector(".countdown");
const body = document.querySelector("body");
setTimeout(()=>{
    result.innerText = 10;
    setTimeout(()=>{
        result.innerText = 9;
        setTimeout(()=>{
            result.innerText = 8;
            setTimeout(()=>{
                result.innerText = 7;
                setTimeout(()=>{
                    result.innerText = 6;
                    setTimeout(()=>{
                        result.innerText = 5;
                        setTimeout(()=>{
                            result.innerText = 4;
                            setTimeout(()=>{
                                result.innerText = 3;
                                setTimeout(()=>{
                                    result.innerText = 2;
                                    setTimeout(()=>{
                                        result.innerText = 1;
                                        setTimeout(()=>{
                                            result.innerText = "Happy Independance day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
     },1000)
},1000)

