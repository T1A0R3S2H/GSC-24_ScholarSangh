var typed = new Typed(".auto-type", {
	strings: ["Discover Countless Opportunities in One Place!"],
	typeSpeed: 30,
	backSpeed: 30,
	loop: true
})


//about-us pe scrolled
document.addEventListener('DOMContentLoaded', function () {
    // Get the "About Us" link and the target section
    var aboutUsLink = document.getElementById('aboutUsLink');
    var section2 = document.getElementById('section2');

    // Add click event listener to the "About Us" link
    aboutUsLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (i.e., jumping to the section)
        event.preventDefault();

        // Calculate the target scroll position leaving 8rem from the top
        var targetScrollPosition = section2.offsetTop - 8 * parseFloat(getComputedStyle(document.documentElement).fontSize);

        // Use smooth scrolling to the target position
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    });
});



//contact-us pe scrolled
document.addEventListener('DOMContentLoaded', function () {
    // Get the "About Us" link and the target section
    var aboutUsLink = document.getElementById('providersLink');
    var section3 = document.getElementById('section3');

    // Add click event listener to the "About Us" link
    aboutUsLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (i.e., jumping to the section)
        event.preventDefault();

        // Calculate the target scroll position leaving 4rem from the top
        var targetScrollPosition = section3.offsetTop - 4 * parseFloat(getComputedStyle(document.documentElement).fontSize);

        // Use smooth scrolling to the target position
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    });
});


//our-team pe scrolled
document.addEventListener('DOMContentLoaded', function () {
	// Get the "About Us" link and the target section
	var aboutUsLink = document.getElementById('teamLink');
	var section4 = document.getElementById('section4');

	// Add click event listener to the "About Us" link
	aboutUsLink.addEventListener('click', function (event) {
		// Prevent the default behavior of the link (i.e., jumping to the section)
		event.preventDefault();

		// Calculate the target scroll position leaving 8rem from the top
		var targetScrollPosition = section4.offsetTop - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

		// Use smooth scrolling to the target position
		window.scrollTo({
			top: targetScrollPosition,
			behavior: 'smooth'
		});
	});
});
