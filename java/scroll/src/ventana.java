import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.event.*;
import javax.swing.text.*;
/*
 * ventana.java
 *
 * Created on 24 de abril de 2008, 9:20
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

/**
 *
 * @author Carlos
 */
public class ventana extends JFrame
{
    JTextArea mText;
    JTextField mField;
    JButton mBoton,mBotonOp;
    JLabel mEtiqueta,mEtiqueta2,mCaracteres;
    JPanel panelInfo,panelInfo2,panelPie;
    JScrollPane srcScroll;
    JSplitPane splSplit;
    /** Creates a new instance of ventana */
    public ventana()
    {       
        Font fNormal=new Font("Verdana",Font.BOLD,10);
        
        //Configuracion de las Etiquetas.
        mEtiqueta=new JLabel(" Numero de Caracteres: ");
        mEtiqueta.setForeground(Color.BLACK);
        mEtiqueta2=new JLabel(" Analista Funcional ");
        mEtiqueta2.setForeground(Color.GREEN);
        mCaracteres=new JLabel(" 0 ");
        mCaracteres.setForeground(Color.RED);

        
        //Configuracion del Boton.
        mBoton=new JButton(" Boton ");
        mBoton.setFont(fNormal);
        ImageIcon imMas=new ImageIcon(getClass().getResource("/lupa.png"));
        mBotonOp=new JButton(" Buscar ",imMas);
        mBotonOp.setFont(fNormal);
        
        //Configuracion del TextArea.
        mText=new JTextArea("");
        mText.setFont(fNormal);
        mText.setLineWrap(true);
        mText.setColumns(26);
        mText.setRows(13);
        mText.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        mText.setBackground(Color.WHITE);
        mText.setOpaque(true);
        
        //ScrollPane.
        srcScroll=new JScrollPane(mText,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);;
        
        //Panel para La Etiqueta.
        JPanel pEtiqueta=new JPanel();
        pEtiqueta.setBackground(Color.WHITE);
        pEtiqueta.setOpaque(true);
        pEtiqueta.setLayout(new GridLayout(10,1));
        pEtiqueta.setLayout(new BoxLayout(pEtiqueta,BoxLayout.Y_AXIS));
        pEtiqueta.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        pEtiqueta.add(mEtiqueta);
        pEtiqueta.add(mCaracteres);
        pEtiqueta.add(Box.createVerticalStrut(80));
        pEtiqueta.add(mBotonOp);
        
        //SplitPane.
        splSplit=new JSplitPane(splSplit.HORIZONTAL_SPLIT);
        splSplit.setBackground(Color.WHITE);
        splSplit.setLeftComponent(srcScroll);
        splSplit.setRightComponent(pEtiqueta);
        splSplit.setDividerSize(5);
        splSplit.setDividerLocation(290);
        
        
        //Configuracion del TextField
        mField=new JTextField(10);
        mField.setFont(fNormal);
        mField.setSize(90,10);
        mField.setColumns(20);
        
        //Panel para el TextField.
        JPanel pField=new JPanel();
        pField.setLayout(new GridLayout(2,1));
        pField.add(mField);
        pField.setBorder(new EmptyBorder(15,15,15,15));
        
        //Panel para el Boton.
        JPanel pBoton=new JPanel();
        pBoton.setLayout(new GridLayout(2,1));
        pBoton.add(mBoton);
        pBoton.setBorder(new EmptyBorder(15,15,15,15));
        
        //Panel de La caja de Texto.
        JPanel pText=new JPanel();
        pText.setBackground(Color.WHITE);
        pText.setLayout(new GridLayout(5,5));
        pText.add(splSplit);
        pText.setBorder(new EmptyBorder(10,10,10,10)); 
           
        //----------Disponer los elementos en capas----------//
        //Panel de Informacion.
        panelInfo=new JPanel(new FlowLayout());
        panelInfo.setBackground(Color.BLACK);
        panelInfo.setOpaque(true);
        panelInfo.add(mField);
        panelInfo.add(mBoton);
        panelInfo2=new JPanel();
        panelInfo2.setBackground(Color.BLACK);
        panelInfo2.setOpaque(true);
        panelInfo2.add(pText);
        panelPie=new JPanel();
        panelPie.setLayout(new FlowLayout(FlowLayout.CENTER));
        panelPie.setBackground(Color.BLACK);
        panelPie.setOpaque(true);
        panelPie.add(mEtiqueta2);
        
        //jframe principal.
        add(panelInfo,BorderLayout.NORTH);
        add(panelInfo2,BorderLayout.CENTER);
        add(panelPie,BorderLayout.SOUTH);
            
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana).
        setSize(600,310);
        setLocation(250,250);
        setTitle(" Aplicaicion Swing ");
        setVisible(true);
        
        //asignacion de oyentes a los objetos.
        kill KillClosing=new kill();
        addWindowListener(KillClosing);
        
        //Oyentes de eventos de Raton.
        EventosRaton EV=new EventosRaton();
        mBoton.addMouseListener(EV);
        
        //asignar oyente para el boton buscar.
       mBotonOp.addMouseListener(EV);
        
        //Oyentes de eventos de Foco.
        Foco F=new Foco();
        mField.addFocusListener(F);
        
        //Oyentes de eventos de Key.
        Key K=new Key();
        mField.addKeyListener(K);
        
        //Oyentes de eventos de Caret.
        ContText CT=new ContText();
        mText.addCaretListener(CT);
        ContField CF=new ContField();
        mField.addCaretListener(CF);
    }
//-------------------------------Funcion para el click del Boton-----------------------------------//
        private void clickBoton()
        {
        //capturar el TextArea y añadirlo al TextField
        String mensaje=mText.getText();
        mensaje+=mField.getText();
        mText.setText(mensaje);
        }
//-------------------------------Clase para matar Procesos(Kill)-----------------------------------//
class kill extends WindowAdapter
    {
       public void windowClosing(WindowEvent e)
       {
        //mensaje de confirmacion o cancelacion de la Aplicaicion.
        int close=JOptionPane.showConfirmDialog(null," ¿Desea cerrar la aplicacion? ","A.F.",0);
           //cierra la aplicacion.
        if(close==0)
            {
           System.exit(0);
            }
       }
    }
//-------------------------------Clase para oyentes de eventos de Raton-----------------------------------//
class EventosRaton extends MouseInputAdapter
{   
       /**Imprimir en la Caja de Texto el TextField.*/
       public void mousePressed(MouseEvent e)
       {
           Object objeto=(Object)e.getSource();
           JButton aux=(JButton) objeto;
           if(objeto instanceof JButton)
           {
               if(aux.getText()==" Boton ")
               {
               clickBoton();
               //enviar el foco de la aplicacion ala caja de texto
               mField.requestFocusInWindow();
               }
               else if(aux.getText()==" Buscar ")
               {
                   String letra=JOptionPane.showInputDialog(null," Introduzca el caracter a buscar: ","Buscar Letra",2);
                   //recorrer el TextArea para encontrar la letra.
                   String cadena=mText.getText();
                   int contador=0;
                   for(int i=0;i<cadena.length();i++)
                   {
                       if(cadena.charAt(i)==letra.charAt(0))
                       {
                           contador++;
                       }
                   }
                   //presentar por mensaje el resultado.
                   JOptionPane.showMessageDialog(null," Las coincidencias es: "+contador," Resultado ",1);
               }
           }
           else if(objeto instanceof JTextField){}
       }
    }
//-------------------------------Clase para oyentes de eventos de Foco-----------------------------------//
public class Foco extends FocusAdapter
{
        public void focusGained(FocusEvent e)
        {
            JTextComponent aux=(JTextComponent)e.getSource();
            aux.setText("");
            
        }
    }
//-------------------------------Clase para oyentes de eventos de Key-----------------------------------//
public class Key extends KeyAdapter
{
        public void keyReleased(KeyEvent e)
        {
        int tecla;
        tecla=e.getKeyCode();
        if (tecla==10)//pulsar enter.
        {
        mBoton.doClick();
        clickBoton();
        mField.selectAll();
        }
        
        }
    }
//-----------------------Clase para contar el numero de caracteres en el TextArea-------------------------//
public class ContText implements CaretListener
{
        public void caretUpdate(CaretEvent e)
        {
            int nCar=mText.getText().length();
            JTextComponent aux=(JTextComponent)e.getSource();
            mCaracteres.setText(Integer.toString(nCar));
            
        }
    }
//-----------------------Clase para contar el numero de caracteres en el TextField-------------------------//
public class ContField implements CaretListener
{
        public void caretUpdate(CaretEvent e)
        {
            JTextComponent aux=(JTextComponent)e.getSource();
            if(aux.getText().length()==0)
            {
                mBoton.setEnabled(true);
            }
            else
                mBoton.setVisible(true);
        }
    }
}
