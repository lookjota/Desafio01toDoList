
import { Text, View } from "react-native";
import { styles } from "./style";
import { Header } from "../components/Header";
import { Task } from "../components/Task"; 

export function HomeScreen2() {
  return ( 
    <View style={styles.container}>
      <Header/>
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>  
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
              <View style={styles.counterContainer}>
                <Text style={styles.counterText}>0</Text>
              </View>
          </View>
        </View>
        <Task title='Estudar Reacct Native' isCompleted />
        <Task title='Estudar Reacct Native' isCompleted={false} />
        <Task title='Estudar Reacct Native' isCompleted />
      </View>
    </View>
  )
}