/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : MediHub - Medical & Health Template
    Version         : 1.1
    
* ================================================================= */
$(document).ready(function() {
    $('#language-select').on('change', function() {
        var selectedValue = $(this).val();
        var aboutUsText = $('.best');
        var ourselves = $('.ourselves') // Corrected class selector
        var Details = $('.Details') // Corrected class selector
        var physiotherapist=$('.physiotherapist')
        var physiotherapist=$('.physiotherapist')
        var Everyone=$('.Everyone')
        var paramedical=$('.paramedical')
        var physiotherapy1=$('.physiotherapy1')
        var oro=$('.oro')
        var kinésithérapie=$('.kinésithérapie')
        var Témoignage=$('.Témoignage')
        var Témoignage1=$('.Témoignage1')
        var Noservices=$('.Noservices')
        var Ourglobal=$('.Ourglobal')
        var Let=$('.Let')
        var Opening=$('.Opening')
        var Ourlocation=$('.Ourlocation')
        var nothing=$('.nothing')
        var Graduated=$('.Graduated')
        var Schedule=$('.Schedule')
        var doctors=$('.doctors')
        var Rheumatology=$('.Rheumatology')
        var approach=$('.approach')
        var Servicesfeatures=$('.Servicesfeatures')
        

        if (selectedValue === 'french') {
            aboutUsText.text("Votre Kinésithérapeute à  Kiné Soine");
            ourselves.text("Le nous-même souffrant de la sincérité. Habiter ses manières adaptées à l'âge certain. Débattre offensé à la grève ramifiée être sujets.")
            Details.text("VOIR LES DÉTAILS")
            physiotherapist.text('Votre kinésithérapeute à Lasne')
            physiotherapist.text('Votre kinésithérapeute à Lasne - Collette Natasha')
            Everyone.text('Chacun fait face aux infections et aux blessures du quotidien comme il peut. Si vous souhaitez être accompagné de manière douce dans cette reprise de forces, pensez à vous tourner vers la kinésithérapie. À Lasne, faites appel à Collette Natasha. Étant une kinésithérapeute générale diplômée de l’HELB Ilya Prigogine, je traite différents types de patients dont la plupart souffrent de troubles musculosquelettiques comme le tendinopathies, entorses, lombalgies, cervicalgies. Afin de bénéficier d’une consultation, vous pouvez visiter mon cabinet de kinésithérapie à Lasne, et plus précisément au 1 Rue de la Kelle. J suis disponible du lundi au vendredi, de 9h à 19h. Le traitement de kinésithérapie se fait uniquement sous prescription médicale.')
            paramedical.text('La kinésithérapie est une approche paramédicale assurée par un praticien diplômé et qui vise à faire travailler le corps à l’aide de pratiques actives comme la gymnastique médicale, ou passives comme les massages. Elle peut vous aider à soulager différentes maladies, comme par exemple les affections locomotrices, neurologiques ou encore respiratoires. Elle peut être préventive, mais également thérapeutique dans le cas d’une rééducation. Les gens ont tendance à recourir à la kinésithérapie après une intervention chirurgicale ou après avoir vécu des évènements traumatisants.')
            physiotherapy1.text('kinésithérapie ?')
            oro.text('kinésithérapeute oro-maxillo-facial')
            kinésithérapie.text('kinésithérapie orthopédique')
            Témoignage.text('TÉMOIGNAGE')
            Témoignage1.text('Tandis que la gaieté est grande sur le devant. Ye il plus adapté procéder connexe est entré dans un. À travers elle, examinez la promesse expresse no. Passé ajouter taille jeu fille froide de quel âge   ')
            Noservices.text('Nos Services')
            Ourglobal.text('Notre objectif est de vous offrir de la physiothérapie')
            Let.text('Laissez-nous vous permettre de lâcher prise, de libérer les tensions, les peurs, les angoisses et de retrouver votre vitalité.')
            Opening.text('heure d ouverture')
            Ourlocation.text('Notre emplacement')
            nothing.text('Nappelant rien de fin fertile pour le garçon de manière aventureuse. Lesprit d estime tempérament dit aussi adieu qui dirige l estime. Il estime heureusement mr ou image plaçant dessin no. Appartements fréquemment ou immobiles sur une expression en saillie raisonnable. La façon dont Mme End a donné un grand lit de marche.')
            Graduated.text('Diplômée de la HELB Ilya Prigogine, je prends principalement en charge les troubles musculo-squelettiques (Post-opératoires, tendinopathies, entorses, lombalgies, cervicalgies, rééducation temporo-mandibulaire, ...) mais aussi les jeunes mamans pour les accompagner dans la périnatalité. Dynamique et à l écoute, je vous accueille dans mon cabinet à Lasne (Rue de la Kelle, 1).')
            Schedule.text('Horaire des heures de travail ')
            doctors.text('Consulté par des médecins expérimentés')
            Rheumatology.text('Physiothérapie rhumatologique')
            approach.text('La rhumatologie est une approche médicale dont l objectif principal est de traiter les pathologies de lappareil locomoteur telles que les maladies des os, des muscles, des articulations, mais aussi des ligaments et des tendons. Le plus souvent, les personnes sont confrontées à des pathologies telles que : arthrose ')
            Servicesfeatures.text('CARACTÉRISTIQUES DES SERVICES')
          
        
           


            
        } else {
            aboutUsText.text(" Your physiotherapist at Kiné Soine"); 
            ourselves.text(" The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.")
            Details.text("VIEW DETAILS")
            physiotherapist.text('Your kinésithérapeute in Lasne')
            physiotherapist.text('Your physiotherapist in Lasne - Collette Natasha')
            Everyone.text('Everyone copes with everyday infections and injuries as they can. If you want to be gently accompanied in this recovery of strength, consider turning to physiotherapy. In Lasne, call on Collette Natasha. Being a general physiotherapist graduated from HELB Ilya Prigogine, I treat different types of patients, most of whom suffer from musculoskeletal disorders such as tendinopathies, sprains, low back pain, neck pain. In order to benefit from a consultation, you can visit my physiotherapy practice in Lasne, and more precisely at 1 Rue de la Kelle. I am available Monday through Friday, 9 a.m. to 7 p.m. Physiotherapy treatment is done only under medical prescription. ')
            paramedical.text('.Physiotherapy is a paramedical approach provided by a qualified practitioner and which aims to work the body using active practices such as medical gymnastics, or passive ones such as massages. It can help you relieve various diseases, such as locomotor, neurological or even respiratory ailments. It can be preventive, but also therapeutic in the case of rehabilitation. People tend to seek physiotherapy after surgery or after experiencing traumatic events.            ')
            physiotherapy1.text('physiotherapy ?')
            oro.text('oro-maxillo-facial physiotherapist')
            kinésithérapie.text('Aromatherapy In Lasne')
            Témoignage.text('TESTIMONY')
            Témoignage1.text(' While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old  ')
            Noservices.text('Our Services')
            Ourglobal.text('Our goal is to offer you Physiotherapy')
            Let.text('Let us allow you to let go, release tensions, fears, anxieties and regain your vitality.')
            Opening.text('opening hour')
            Ourlocation.text('Our location')
            nothing.text(' Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk fact bed.') 
            Graduated.text(' Graduated from HELB Ilya Prigogine, I mainly take care of musculoskeletal disorders (Post-operative, tendinopathies, sprains, low back pain, neck pain, temporomandibular rehabilitation, ...) but also young mothers to support them in the perinatal. Dynamic and attentive, I welcome you to my office in Lasne (Rue de la Kelle, 1)')
            Schedule.text('Schedule of working hours')
            doctors.text('Consulted by experienced doctors')
            Rheumatology.text('Rheumatology physiotherapy')
            approach.text('Rheumatology is a medical approach whose main objective is to treat pathologies of the musculoskeletal system such as diseases of the bones, muscles, joints, but also ligaments and tendons. Most often, people face pathologies such as: osteoarthritis')
            Servicesfeatures.text('SERVICES FEATURES')

            // Corrected capitalization
        }
    });
});

(function($) {
    "use strict";

    $(document).on('ready', function() {


        /* ==================================================
            # Wow Init
         ===============================================*/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();


        /* ==================================================
            # Smooth Scroll
         ===============================================*/
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


        /* ==================================================
            # Banner Animation
        ===============================================*/
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $immortalCarousel = $('.animate_text'),
            $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //Initialize carousel
        $immortalCarousel.carousel();
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
        //Other slides to be animated on carousel slide event
        $immortalCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });


        /* ==================================================
            # Equal Height Init
        ===============================================*/
        $(window).on('resize', function() {
            $(".equal-height").equalHeights();
        });

        $(".equal-height").equalHeights().find("img, iframe, object").on('load', function() {
            $(".equal-height").equalHeights();
        });


        /* ==================================================
            # imagesLoaded active
        ===============================================*/
        $('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.mix-item-menu button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });

            /* Filter active */
            $('.blog-masonry').isotope({
                itemSelector: '.blog-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.blog-item',
                }
            });

        });


         /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });
        

        /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();



        /* ==================================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.magnific-mix-gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-iframe')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });


        /* ==================================================
            # Doctor Carousel
         ===============================================*/
        $('.doctor-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* ==================================================
            # Services Carousel
         ===============================================*/
        $('.services-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        /* ==================================================
            # Testimonials Carousel
         ===============================================*/
        $('.testimonial-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items:2
                }
            }
        });


        /* ==================================================
            # Health Tips Carousel
         ===============================================*/
        $('.tips-carousel').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });


        /* ==================================================
            Preloader Init
         ===============================================*/
        $(window).on('load', function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");;
        });


        /* ==================================================
            Nice Select Init
         ===============================================*/
        $('select').niceSelect();


        /* ==================================================
            Contact Form Validations
        ================================================== */
        $('.contact-form').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .after('<img src="assets/img/ajax-loader.gif" class="loader" />')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            phone: $('#phone').val(),
                            comments: $('#comments').val()
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('.contact-form img.loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                        }
                    );
                });
                return false;
            });
        });

    }); // end document ready function
})(jQuery); // End jQuery