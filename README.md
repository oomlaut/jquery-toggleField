toggleField.jquery.js
=====================

A multi-functional jQuery plug-in to enable behavior similar to the _placeholder_ attribute on varieties of `input` types 

[![endorse](https://api.coderwall.com/oomlaut/endorsecount.png)](https://coderwall.com/oomlaut)

REQUIREMENTS
------------

* jQuery v1.3 or above

FEATURES
--------

* Sets the _placeholder_ attribute if it is not already defined
* Markup still validates in <HTML5 if _placeholder_ property is omitted and _title_ or _label_ is specified as the text-source
* Toggles the _value_ of the field in browsers that do not support _placeholder_
* Clears the populated values on submit to assist with validation
* Mimics functionality for password fields by creating an adjacent text field and toggling the two on focus/blur
* Tested browser-compatible back to IE6

INSTALLATION
------------

Include script after the jQuery library (unless you are packaging scripts somehow else):

	<script src="/path/to/jquery.togglefield.js"></script>
	
USAGE
-----

Applies behavior to all input elements:

	jQuery('input').toggleField();

References "title" attribute for placeholder text. Useful for accessibility:

	jQuery('[type="url"]').togglefield({textsrc:"title"});

Uses the label text for placeholder. Handy when labels are hidden:

	jQuery('input:password').togglefield({textsrc:"label"});


OPTIONS
-------

* `textsrc` Where to pull assistive text from. Default value: _placeholder_

DEVELOPMENT
-----------

* Source hosted at [GitHub][gh]
* Please report all issues, questions, and feature requests to [GitHub Issues][ghi]
* Pull requests are definitely encouraged! Please test your code before submitting however.

CHANGELOG
---------

CREDITS
-------

* For a more advanced implementation of this type of behavior, check out [jquery.placeholder.js][jqph]
* Check for "placeholder" attribute support in browser: [diveintohtml5][dive]
* Inspiration for the password field helper function: [stack overflow][so]

AUTHOR
------
[Paul Gueller][pg]

[gh]: https://github.com/oomlaut/toggleField.jquery.js
[ghi]: https://github.com/oomlaut/toggleField.jquery.js/issues
[jqph]: https://github.com/mathiasbynens/jquery-placeholder
[dive]: http://diveintohtml5.org/detect.html#input-placeholder
[so]: http://stackoverflow.com/questions/1544317/jquery-change-type-of-input-field
[pg]: http://paulgueller.com
