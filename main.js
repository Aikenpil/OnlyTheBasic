
(function ($) {

    let self = {
        ericBombadoImg: ["https://user-images.githubusercontent.com/78743601/173912199-ca69162f-ab7f-41bf-9c42-c7e6189625f2.png", "https://user-images.githubusercontent.com/78743601/173913549-ac4bc9a1-45cf-4487-bdd8-e8db3eb65f49.png", "https://user-images.githubusercontent.com/78743601/173913558-80424531-e719-402b-8438-a8e45565734c.png", "https://user-images.githubusercontent.com/78743601/173913562-9cf2b75a-bcbe-431e-a2fe-3ebc71b1ce5a.png", "https://user-images.githubusercontent.com/78743601/173913567-404096d2-13b0-462c-97c4-9b925efe8226.png"],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        self.handleImg(item, lstImgs);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                self.handleImg(item, lstImgs);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },
        handleImg: function (item, lstImgs) {
            $(item).error(function () {
                //Handle broken imgs
                self.handleBrokenImg(item, lstImgs);
            });

            self.setRandomImg(item, lstImgs);
        },
        setRandomImg: function (item, lstImgs) {
            var h = $(item).height();
            var w = $(item).width();
            $(item).css('width', w + 'px').css('height', h + 'px');
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
        },
        handleBrokenImg: function (item, lstImgs) {

            var brokenImg = $(item).attr('src');
            var index = lstImgs.indexOf(brokenImg);
            if (index > -1) {
                lstImgs.splice(index, 1);
            }
            self.setRandomImg(item, lstImgs);
        },
        handleText: function (texto){
            $("h1, h2, h3, h4, h5, h6, span, p").map(function(){
                this.innerHTML = texto;
            });
        },
    };

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.ericBombadoImg, 3000);
        self.handleText("SO O BASICO");
    });

    //Set global variable
    $.nCage = self;

})(jQuery);
