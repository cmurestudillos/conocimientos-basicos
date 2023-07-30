import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.event.*;
/*
 * ventana.java
 *
 * Created on 30 de abril de 2008, 9:15
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
    JTextPane mEtiqueta;
    JLabel mFirma,mCabecera,mTitulo;
    JPanel panelPie,panelEncabezado,panelMenu;
    JButton mBoton,mBotonInsert,mBotonReset;
    JScrollPane srcScroll;
    JScrollPane jlScroll;
    JSplitPane splDerecha; 
    ImageIcon imMas,imMas2,imMas3;
    JCheckBox chkOp[];
    JRadioButton rbOp[];
    JComboBox cbColores[];
    JList jlCiudades[];
    ButtonGroup grupo1,grupo2;
    /** Creates a new instance of ventana */
    public ventana()
    {
        Font fPie=new Font("Verdana",Font.BOLD,8);
        Font fNormal=new Font("Verdana",Font.BOLD,10);
        Font fTitulo=new Font("Verdana",Font.BOLD,20);
        
        //Configuracion del Boton de cerrar Aplicacion
        ImageIcon imMas=new ImageIcon(getClass().getResource("/cerrar.png"));
        mBoton=new JButton("Cerrar",imMas);
        
        //Configuracion del Boton insertar.
        ImageIcon imMas2=new ImageIcon(getClass().getResource("/insert.png"));
        mBotonInsert=new JButton("Enviar",imMas2);
        
        //Configuracion del Boton Reset.
        ImageIcon imMas3=new ImageIcon(getClass().getResource("/reset.png"));
        mBotonReset=new JButton("Limpiar",imMas3);
        
        //Oyentes de eventos de Raton.
        EventosRaton EV=new EventosRaton();
        mBoton.addMouseListener(EV);
        mBotonReset.addMouseListener(EV);
        
        //Oyentes de los CheckBox.
        CheckBoxListener CHK = new CheckBoxListener();
        
        //Oyentes para los RadioButton.
        RadioListener RB = new RadioListener();
        
        //Oyentes de los ComboBox.
        ComboBoxListener CB = new ComboBoxListener();
        
        //Oyentes de el JList.
        ListSelection JL = new ListSelection();
                
        //Creacion y configuracion etiquetas.
        mFirma=new JLabel(" Aplicacion desarrollada en Java ");
        mFirma.setFont(fPie);
        mFirma.setOpaque(true);
        mFirma.setForeground(Color.RED);
        mTitulo=new JLabel(" Controles de Formulario ");
        mTitulo.setFont(fTitulo);
        mTitulo.setOpaque(true);
        mTitulo.setForeground(Color.BLACK);
        
        //Creacion y Configuracion del TextPane 
        mEtiqueta=new JTextPane();
        mEtiqueta.setFont(fNormal);
        mEtiqueta.setOpaque(true);
        mEtiqueta.setForeground(Color.BLACK);
        mEtiqueta.setBorder(BorderFactory.createTitledBorder(" Resultado: "));

        //Panel CheckBox.
        JPanel chkPanel=new JPanel();
        chkPanel.setLayout(new FlowLayout());
        chkPanel.setBorder(BorderFactory.createTitledBorder("Menu CheckBox"));
        
        //Panel RadioButton.
        JPanel rbPanel=new JPanel();
        rbPanel.setLayout(new GridLayout(3,2));
        rbPanel.setBorder(BorderFactory.createTitledBorder("Menu RadioButton"));
        
        //Panel ComboBox.
        JPanel cbPanel=new JPanel();
        cbPanel.setLayout(new FlowLayout());
        cbPanel.setBorder(BorderFactory.createTitledBorder("Menu ComboBox"));
        
        //Panel jList.
        JPanel jlPanel=new JPanel();
        jlPanel.setLayout(new FlowLayout());
        jlPanel.setBorder(BorderFactory.createTitledBorder("Menu JList"));

        //Panel para el Boton.
        JPanel pBoton=new JPanel();
        pBoton.setLayout(new GridLayout(1,2));
        pBoton.add(mBotonInsert);
        pBoton.add(mBotonReset);
        
        panelEncabezado=new JPanel();
        panelEncabezado.setLayout(new FlowLayout(FlowLayout.CENTER));
        panelEncabezado.setOpaque(true);
        panelEncabezado.add(mTitulo);
        panelEncabezado.add(mBoton);
        panelPie=new JPanel();
        panelPie.setLayout(new FlowLayout(FlowLayout.RIGHT));
        panelPie.setOpaque(true);
        panelPie.add(mFirma);
 
        //ScrollPane.
        srcScroll=new JScrollPane(mEtiqueta,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);

        //SplitPane2.
        panelMenu=new JPanel();
        panelMenu.setLayout(new GridLayout(5,1));
        panelMenu.add(chkPanel);
        panelMenu.add(rbPanel);
        panelMenu.add(cbPanel);
        panelMenu.add(jlPanel);
        panelMenu.add(pBoton);
        
        //SplitPane.
        splDerecha=new JSplitPane();
        splDerecha.setBackground(Color.WHITE);
        splDerecha.setLeftComponent(panelMenu);
        splDerecha.setRightComponent(srcScroll);
        splDerecha.setDividerSize(5);
        splDerecha.setDividerLocation(430);
        
        //Creacion de los CheckBox
        chkOp=new JCheckBox[3];
        String chkTitulo[]={"Opcion 1","Opcion 2","Opcion 3"};
        
        for(int i=0;i<chkOp.length;i++)
        {
            //Configuracion del CheckBox
            chkOp[i]=new JCheckBox(chkTitulo[i]);
            chkOp[i].setFont(fNormal);
            chkPanel.add(chkOp[i]);
            chkOp[i].addItemListener(CHK);
        }
        
        //Creacion de los RadioButton
        rbOp=new JRadioButton[4];
        String rbTitulo[]={"Opcion 1","Opcion 2","Opcion 3","Opcion 4"};
        
        for(int j=0;j<rbOp.length;j++)
        {
            //Configuracion del RadioButton
            rbOp[j]=new JRadioButton(rbTitulo[j]);
            rbOp[j].setFont(fNormal);
            rbOp[j].setSelected(false);

            //Grupos para los RadioButtons.
            ButtonGroup grupo1 = new ButtonGroup();
            ButtonGroup grupo2=new ButtonGroup();
            grupo1.add(rbOp[0]);
            grupo1.add(rbOp[1]);
            grupo2.add(rbOp[2]);
            grupo2.add(rbOp[3]);
            rbPanel.add(rbOp[j]);
            rbOp[j].addItemListener(RB);
        }
        
        //Creacion del ComboBox.
        cbColores=new JComboBox[1];
        String cbTitulo[]={" ------ ","Rojo","Naranja","Amarillo","Verde","Azul","Violeta","Añil"};
        
        for(int k=0;k<cbColores.length;k++)
        {
            //Configuracion del comboBox
            cbColores[k]=new JComboBox(cbTitulo);
            cbColores[k].setEditable(true);
            cbColores[k].setSelectedIndex(0);
            cbColores[k].setAlignmentX(Component.LEFT_ALIGNMENT);
            cbColores[k].setFont(fNormal);
            cbPanel.add(cbColores[k]);
            cbColores[k].addItemListener(CB);
        }
        
        //Creacion del JList.
        jlCiudades=new JList[1];
        String jlTitulo[]={"Madrid","Barcelona","Sevilla"};
        
        for(int l=0;l<jlCiudades.length;l++)
        {
            //Configuracion del comboBox
            jlCiudades[l]=new JList(jlTitulo);
            jlCiudades[l].setSelectedIndex(0);
            jlCiudades[l].setAlignmentX(Component.CENTER_ALIGNMENT);
            jlCiudades[l].setFont(fNormal);
            jlPanel.add(jlCiudades[l]);
            jlCiudades[l].addListSelectionListener(JL);
        }
        
        //jframe principal.
        add(panelEncabezado,BorderLayout.NORTH);
        add(splDerecha,BorderLayout.CENTER);
        add(panelPie,BorderLayout.SOUTH);
        
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana). 
        setSize(870,600);
        setLocation(150,150);
        setTitle(" Aplicaicion Swing ");
        setVisible(true);
        
        //asignacion de oyentes a los objetos.
        kill KillClosing=new kill();
        addWindowListener(KillClosing);
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
       /** Creacion de un boton para cerrar la aplicacion */
       public void mouseReleased(MouseEvent e)
       {
        JButton aux=(JButton)e.getSource();
        String mensaje=mEtiqueta.getText();
        //cierra la aplicacion.
        if(aux.getText()=="Cerrar")
            {
           System.exit(0);
            }
        //Muestra en el TextArea el Boton que hemos pulsado.
        else if(aux.getText()=="Limpiar")
            {
                mensaje=aux.getText();  
                mEtiqueta.setText("");

            }
        }
    }
//-------------------------------Clase para oyentes de eventos de los CheckBox-----------------------------------//
class CheckBoxListener implements ItemListener
    {
        public void itemStateChanged(ItemEvent e)
        {
            String cadena=mEtiqueta.getText();
            
            JCheckBox chkAux=(JCheckBox) e.getSource();   
            cadena+="\nEl CheckBox pulsado es: " + chkAux.getText();
            
            mEtiqueta.setText(cadena);
        }
    }
//-------------------------------Clase para oyentes de eventos de los CheckBox-----------------------------------//
class RadioListener implements ItemListener
    {
        public void itemStateChanged(ItemEvent e)
        {
            String cadena=mEtiqueta.getText();
            
            JRadioButton rbAux=(JRadioButton) e.getSource();   
            cadena+="\nEl RadioButton pulsado es: " + rbAux.getText();
            
            mEtiqueta.setText(cadena);
        }
    }
//-------------------------------Clase para oyentes de eventos de los CheckBox-----------------------------------//
class ComboBoxListener implements ItemListener
    {
        public void itemStateChanged(ItemEvent e)
        {
            String cadena=mEtiqueta.getText();
            
            JComboBox cbAux=(JComboBox) e.getSource();   
            cadena+="\nEl ComboBox elegido es: " + cbAux.getSelectedItem();
            
            mEtiqueta.setText(cadena);
        }
    }
//-------------------------------Clase para oyentes de eventos de los CheckBox-----------------------------------//
class ListSelection implements ListSelectionListener
    {
        public void valueChanged(ListSelectionEvent e)
        {
            String cadena=mEtiqueta.getText();
            
            JList jlAux=(JList) e.getSource(); 
            if(!e.getValueIsAdjusting())
            {
                cadena+="\nLa Opcion elegida es: " + jlAux.getSelectedValue();
            }
            mEtiqueta.setText(cadena);
        }
    }
}
