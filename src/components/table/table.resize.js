import $ from '../../core/Dom';

const resizeHandler = (evt, $root) =>{
    const $target = $(evt.target);
    const $parent = $($target.closest('[data-type="resizeble"]'))
    const coord = $parent.getCoord
    const columns = $root.findAll(`[data-cell="${$parent.getAttribute('data-cell')}"]`)
    let delta;
    const typeResize = evt.target.dataset.resize
    const cssProps = typeResize === 'col' ? 'bottom' : 'right'
    $target.css({[cssProps]:'-2000px', opacity:'1'})

    onmousemove = (evt) => {
      if(typeResize === 'col'){
        delta = evt.clientX - coord.right
        $target.css({right:- delta +'px'})
      }else{
        delta = evt.clientY - coord.bottom
        $target.css({bottom: - delta + 'px'})
      } 
    }

    onmouseup = (evt) => {
      if(typeResize === 'col'){
        columns.forEach(col=>{
          col.style.width = coord.width + delta +'px'
        })
        $target.css({bottom:'0', opacity:'0', right: '0'})
      }else{
        $parent.css({height: coord.height + delta + 'px'})
        $target.css({bottom:'0', opacity:'0', right: '0'})
      }    
      onmousemove = null
      onmouseup = null
    }
}

export default resizeHandler;