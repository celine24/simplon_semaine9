$list = document.getElementById("list");
$remove = document.getElementById("remove");
$restore = document.getElementById("restore");

function select(e) {
    e.target.classList.toggle("selected");
}

function remove() {
    for (i = 0; i < $list.children.length; i++) {
        if ($list.children[i].classList.contains("selected")) {
            $list.children[i].classList.add("dustbin");
        }
    }
}

function restore() {
    for (i = 0; i < $list.children.length; i++) {
        $list.children[i].classList.remove("dustbin");
    }
}

$list.onclick = select;
$remove.onclick = remove;
$restore.onclick = restore;