


// Left pane's width when expanded
const max_pane_width = (window.innerWidth < 480) ? 70 : (window.innerWidth < 768) ?  65 : 30;
const left_pane_node = $('#left-pane');
const right_pane_node = $('.right-pane');
const pane_close = $('#pane-close');
const pane_open = $('#pane-open');

function closeAll() {
    let topic_windows = [
        $('#home-pane'), $('#window1'), $('#window2'), $('#window3'), $('#window4'), $('#window5'),
        $('#window6'), $('#window7'), $('#window8'), $('#window9'), $('#window10'),
        $('#window11'), $('#window12'), $('#window13'), $('#window14'), $('#window15')
    ];

    for(let topic_window of topic_windows) {
        topic_window.css('display', 'none');
    }
}

// Factorial Function to calculate the factorial of the given number.
function factorial(number) {
    let fact = 1;
    for(; number > 0; number--) {
        fact *= number;
    }
    return fact;
}

// Euclidean Algorithm
function gcd(num1, num2) {
    let x = Math.abs(num1);
    let y = Math.abs(num2);
    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

// Geometric Algorithm
function geometric(a, r, n) {
    let series_out = "";
    let temp_a = a;
    if (n > 5) {
        for(let b = 0; b < 5; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a *= r;
        }
        series_out += "..."
    } else  {
        for(let b = 0; b < n; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a *= r;
        }
    }
    return [a * Math.pow(r, n-1), series_out]
}

// Arithmetic Sequence
function arithmetic(a, d, n) {
    let series_out = "";
    let temp_a = a;
    if (n > 10) {
        for(let b = 0; b < 10; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a += d;
        }
        series_out += "..."
    } else  {
        for(let b = 0; b < n; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a += d;
        }
    }
    return [ a + (n-1)*d, series_out]
}
//Existential Quantifier
// function ExistentialQuantifier(x, y) { 
//     for (const elementx of x) {
//         if (!y.some((yy) => yy + yy === x)) {
//             return false;
//         }
//     }
//     return true;
// }

// let x = [2, 4, 6, 7]
// let y = [1, 2, 3, 4]
// console.log(ExistentialQuantifier(x, y))


// Recursive Algorithm
function recursiveAlgorithm(num) {
    if (num === 1)
        return 1;
    else
        return num * recursiveAlgorithm(num - 1);
}

function calculate(start, end, operator, increment) {
    let total = start;
    let temp = 0
    let series = "";
    for(; start <= end; start++) {
        if (operator == '+') {
            start += increment;
        } else if (operator == '-') {
            start -= increment;
        } else if (operator == '*') {
            start *= increment;
        } else {
            total /= increment;
        }
    }
}

function getSigmaMale(start, end, condition) {
    let total = start
    if(condition == 'n') {
        calculate(start, end, '+', )
    } else {
        let sigma = condition.split()
        calculate(start, end, sigma[1], sigma[2]);
    }
}


$(document).ready(() => {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    let topic_elements = [
        $('#topic1'), $('#topic2'), $('#topic3'), $('#topic4'), $('#topic5'),
        $('#topic6'), $('#topic7'), $('#topic8'), $('#topic9'), $('#topic10'),
        $('#topic11'), $('#topic12'), $('#topic13'), $('#topic14'), $('#topic15') 
    ];

    // List of window elements
    let window_elements = [
        $('#window1'), $('#window2'), $('#window3'), $('#window4'), $('#window5'),
        $('#window6'), $('#window7'), $('#window8'), $('#window9'), $('#window10'),
        $('#window11'), $('#window12'), $('#window13'), $('#window14'), $('#window15')
    ]; 
    
    // Assigns a click listener to every topic element
    for(let i = 0; i < topic_elements.length; i++) {
        topic_elements[i].click(() => {
            closeAll();
            window_elements[i].css("display", "block");

        });
    }

    // Expand Pane Button 
    $('#pane-open').click(()=> {
        console.log("OPeeeeeeeeeeeen!")
        for(let i of $('.accordion')) {
            $(i).css('background', '#000');
        }
        left_pane_node.css({
            padding: '1em',
            paddingTop: '0',
            width: `${max_pane_width}%`
        });
        pane_close.css({
            display: 'block',
            right: '1em',
            top: '1rem'
        });
        pane_open.css('display', 'none');
        right_pane_node.css({
            background: '#000',
            opacity: '.5',
            zIndex: '-1'
        });
        $('.topics').fadeIn('fast');
    });

    // Collapse Pane Button
    $('#pane-close').click(() => {
        for(let i of $('.accordion')) {
            $(i).css('background', '#F9F9F9');
        }
        left_pane_node.css({
            width: '0',
            padding: '0'
        });
        pane_close.fadeOut('fast');
        pane_open.fadeIn(1000);
        right_pane_node.css({
            background: '#FAF9F6',
            opacity: '1',
            zIndex: 'inherit'
        });
        $('.topics').fadeOut('fast');
    });
    
    
    
    
    // Factorial Calculate Event
    $('#factorial-c').click(() => {
        $('#factorial-o').val(factorial($('#factorial-i').val()));
    });

    // Euclidean Calculate Event
    $('#euclidean-c').click(() => {
        $('#euclidean-o').val(gcd(Number($('#euclidean-i').val()), Number($('#euclidean1-i').val())));
    });

    // Geometric Calculate Event
    $('#geometric-c').click(() => {
        let [nth, series] = geometric(Number($('#geometric-a').val()), Number($('#geometric-r').val()), Number($("#geometric-n").val()));
        $('#nth-text').text(nth);
        $('#g-series').text(series);
    });
    // Arithmetic Calculate Event
    $('#arithmetic-c').click(() => {
        let [nth, series] = arithmetic(Number($('#arithmetic-a').val()), Number($('#arithmetic-r').val()), Number($("#arithmetic-n").val()));
        $('#anth-text').text(nth);
        $('#a-series').text(series);
    });

    // Recursive Calculate Event
    $('#factorial-rc').click(() => {
        $('#factorial-r').val(recursiveAlgorithm($('#factorial-ri').val()));
    });
});