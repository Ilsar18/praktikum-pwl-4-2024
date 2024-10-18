let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-center gap-x-2`;
   task.innerHTML = `
      <div class="w-52 mt-2">
         <p class="">${title}</p>
      </div>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-800 text-white px-5 mx-3 my-2 rounded-md">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-800 text-white px-5 my-2 rounded-md">
  
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
