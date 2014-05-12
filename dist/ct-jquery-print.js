/*!
    @ print
    ---------------------------------------------------------------
    Inject a print button

    v 0.1 | DS 11.04.2011

    Examples:
    $('#tools').print()

    Leading semi-colon:
    http://stackoverflow.com/questions/2481543/why-does-the-javascript-need-to-start-with
    _______________________________________________________________
*/

    ;(function($) {
        $.fn.print = function(options)
        {
            // PLUGIN DEFAULTS
            $.fn.print.defaults = {
                label: 'print page',
                before: '',
                after: ''
            };

            options = $.extend($.fn.print.defaults,options);

            return this.each(function() {

                // IF ALREADY ENHANCED, EXIT
                if ( $(this).data('printified') )
                {
                    return;
                }

                $(this).append(options.before + '<button type="button" id="print" class="print">' + options.label + '</button>' + options.after);

                $('#print')
                .bind('mouseenter focus', function() {
                    $(this).addClass('over');
                })
                .bind('mouseleave blur', function() {
                    $(this).removeClass('over');
                })
                .click( function() {
                    window.print();
                });

                // MARK AS DONE
                $(this).data('printified', true);

            });
        };
    })(jQuery);