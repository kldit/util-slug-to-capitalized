/**
 * @author Orlando Leite
 *
 * util functions
 */

require('@kldit/util-first-char-case');

Object.defineProperty(String.prototype, 'slugToCapitalized',
{
    enumerable: false,
    value: function ()
    {
        let name = this.split(/-/);
        for(var i in name)
        {
            var piece = name[i];
            name[i] = piece.firstCharToUpperCase();
        }
        return name.join('');
    }
});
