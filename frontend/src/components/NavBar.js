import React from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';

class NavBar extends React.Component {
    componentDidMount() {
        // Legacy jQuery from template, need to remove
        // Toggle the side navigation
        $("#sidebarToggle").on('click', function(e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        });
        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
            if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
            }
        });

        // Scroll to top button appear
        $(document).on('scroll', function() {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
            } else {
            $('.scroll-to-top').fadeOut();
            }
        });

        // Smooth scrolling using jQuery easing
        $(document).on('click', 'a.scroll-to-top', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    render(){
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <a className="navbar-brand mr-1" href="/">Wildfire Analysis</a>

                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="/">
                <i className="fas fa-bars"></i>
                </button>

                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search"></i>
                    </button>
                    </div>
                </div>
                </form>
            </nav>
        );
    }
}

export default NavBar;
