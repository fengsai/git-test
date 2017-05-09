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
             this.length=nodelist.length;

            for(var i=0;i<nodelist.length;i++)
            {
                this[i]=nodelist[i];
            }

            return this;

        },

        click:function (fn) {
            this[0].addEventListener("click",function () {
                    fn.call(this);
            },!1)

        },
        html:function (content) {

            var that=this;

            if(content)
            {
                that[0].innerHTML=content;

            }else {
                return that[0].innerHTML;
            }

        }

    }

    var $=function (id,content) {
        return new F(id,content);
    }

    window.$=$;

})(window);
