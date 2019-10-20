gallery = new Array();

function Picture(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}

function populate_gallery() {
    image_urls = 
    ["https://pbs.twimg.com/media/D16Rp7aU4AAI9Zy?format=png&name=900x900",
     "https://pbs.twimg.com/media/D1ux_clUkAABe_P?format=png&name=4096x4096",
     "https://pbs.twimg.com/media/EHKuZtQUcAIM4bx?format=png&name=medium",
     "https://pbs.twimg.com/media/EFZ6zqqUUAAZ8Fx?format=jpg&name=4096x4096",
     "https://pbs.twimg.com/media/EFtZB-5UEAEnCgj?format=jpg&name=large",
     "https://pbs.twimg.com/media/EGGkVHcUUAA7qqW?format=jpg&name=large"];
    names = 
    ["Akechi, 2019",
     "Link, 2019",
     "Cats, 2019",
     "Rock, 2019",
     "Trio, 2019",
     "Loquats, 2019"
    ]
    prices = 
    [
     "$15 USD",
     "$15, USD",
     "$10, USD",
     "$5, USD",
     "$7, USD",
     "Not for sale"
    ]
    images = new Array();
    for (i = 0; i < 6; i++) {
        images.push(new Picture(names[i], prices[i], image_urls[i]));
    }

    $(document).ready (function () {
        count = 0;
        $.each(images, function(key, pic) {
            var img = $('<img id="' + pic.name + '" class="small-image">');
            img.attr('src', pic.image);
            // only add 'active' class to first image
            if (count === 0) {
                img.addClass("active");
                count++;
            }

            // fade-in/out when mouseover; make sure that pic is not already active
            img.bind('mouseover', function() {
                if (!img.hasClass("active")) {
                    $(".active").removeClass("active");
                    img.addClass("active");
                    $("#large-gallery").fadeOut("slow", function () {
                        $("#large-gallery img").attr('src', pic.image);
                        $("#large-gallery").fadeIn("slow");
                        
                        $(".name").html(pic.name);
                        $(".price").html(pic.price);
                    });
                }
            });
            img.bind('click', function() {
                $(".description").show().delay(5000).hide(1000);
            });
            img.appendTo('#small-gallery');
        })
        i = $('<img class="large-image">');
        var description = $('<div class="description"><h2 class="name">' + images[0].name + '</h2><p class="price">' + images[0].price + '</p></div>')
        description.prependTo("#large-gallery");
        description.hide();
        i.attr('src', images[0].image);

        i.appendTo("#large-gallery");
    })
    
}

populate_gallery();