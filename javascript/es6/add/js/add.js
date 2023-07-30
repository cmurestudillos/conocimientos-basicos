		let tareas = [];

		/**
		 * Función para añadir una nueva tarea
		 */
		let add = function() {
			let new_note = document.querySelector('#new_note');
			// Guardamos la tarea en el array
			tareas.push(new_note.value);
			// Borramos la tarea del input
			new_note.value = '';
			new_note.focus();
			// Redibujamos
			render();
		}

		/**
		  Función para borrar una tarea
		  */
		let del = function(pos) {
			// Borramos de tareas
			tareas.splice(pos, 1);
			// Redibujamos
			render();
		}

		/**
		 * Función que redibuja las tareas
		 */
		let render = function() {
			let html_tareas = document.querySelector('#tareas');
			let html_final = '';
			// Generamos el HTML
			let num = 0;
			for(let i of tareas) {
				html_final += `
					<div class="panel panel-default">
						<a href="#" class="btn btn-danger pull-right" onclick="del(${num})">X</a>
						<div class="panel-body">
						${i}
						</div>
					</div>	
					`;
				num += 1;
			}
			// Insertamos el HTML
			html_tareas.innerHTML = html_final;
		}
