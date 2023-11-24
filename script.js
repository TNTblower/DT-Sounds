$('.dl-button').on('click', e => {

    let btn = $(e.currentTarget),
        label = btn.find('.label'),
        counter = label.find('.counter');
    
    if(!btn.hasClass('active') && !btn.hasClass('done')) {
    
        btn.addClass('active');
    
        setLabel(label, label.find('.default'), label.find('.state'));
    
        setTimeout(() => {
            counter.addClass('hide');
            counter.animate({
                width: 0
            }, 400, function() {
                label.width(label.find('.state > span').width());
                counter.removeAttr('style');
            });
            btn.removeClass('active').addClass('done');
            if (btn.hasClass('evolution')) {
                window.open("https://drive.google.com/uc?id=1rt14h9_TrJpM-1Eefm-FXiF5Sai7Czrg&export=download", "_blank");
            } else {
                if (btn.hasClass('vol1')) {
                    window.open("https://drive.google.com/u/3/uc?id=1CrskTkG4iSIcOrbRzWVEI-Icrkq2MKUI&export=download", "_blank");
                }
            }
        }, getComputedStyle(btn[0]).getPropertyValue('--duration'));
    
    }
    
    return false;
    
    });
    
    $('.restart').on('click', e => {
    
    let btn = $('.dl-button'),
        label = btn.find('.label'),
        counter = label.find('.counter');
    
    setLabel(label, label.find('.state'), label.find('.default'), function() {
        counter.removeClass('hide');
        btn.removeClass('done');
    });
    
    return false;
    
    });
    
    function setLabel(div, oldD, newD, callback) {
    oldD.addClass('hide');
    div.animate({
        width: newD.outerWidth()
    }, 200, function() {
        oldD.removeClass('show hide');
        newD.addClass('show');
        div.removeAttr('style');
        if(typeof callback === 'function') {
            callback();
        }
    });
    }
    