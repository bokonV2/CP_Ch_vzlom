from flask import Flask, render_template, request, redirect
from config import thems, tests, ownThems
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/helpc')
def helpc():
    return render_template('helpc.html')

@app.route('/theme/<int:id>')
def theme(id):
    return render_template('theme.html', id=id)

@app.route('/lect/<int:id>')
def lect(id):
    return render_template('lect.html', id=id, thems=thems[id])

@app.route('/lect/<int:id>/<int:lesson>')
def lect_2(id, lesson):
    print(f"{id}:{lesson}")
    return render_template('lect_2.html', id=id, lesson=lesson)

@app.route('/test/<int:id>')
def test(id):
    print(tests)
    return render_template('test.html', id=id, tests=tests[id])

@app.route('/testFinal/<int:id>')
def testFinal(id):

    otvets = request.args.get('otvets')
    verno = request.args.get('verno')
    return render_template('testFinal.html',
        id=id,
        otvets=otvets,
        verno=verno,
        theme=ownThems[id]
    )

@app.route('/tren/<int:id>')
def tren(id):
    return render_template('tren.html', id=id)

@app.route('/kont/<int:id>')
def kont(id):
    return redirect(f'/lect/{id}/0')


#
#
#
#

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
