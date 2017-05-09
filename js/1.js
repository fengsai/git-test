/**
 * Created by Administrator on 2017/5/8.
 */

(function (w) {

    function F(id,content) {
        return this.init(id,content)
    }

    F.prototype={

        init:function (id,content) {
            var nodelist=(content||document).querySelectorAll(id);
             this.lenght=nodelist.length;

            for(var i=0;i<nodelist.length;i++)
            {
                this[i]=nodelist[i];
            }

            return this;

        }

    }

    var $=function (id,content) {
        return new F(id,content);
    }



})(window);
