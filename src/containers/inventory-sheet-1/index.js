import React from 'react'
import TextInputCard from '../../components/text-input-card'
import NextButton from '../../components/next-button'
import Header from '../../components/header'
import styles from './styles'

export default function InventorySheet1() {
    return (
        <div style={styles.mainContainer}>
            <Header/>
            <div style={styles.formContainer}>
                <div style={styles.formColumn}>
                    <div style={styles.formItem}>
                        <TextInputCard
                            title={"1. WHY AM I DISTURBED? BRIEFLY WRITE OUT OUR ANGER, FEAR, FRUSTRATION, DISCONTENT ETC. THIS IS NOT STORYTELLING, JUST WRITING THE KEY POINTS."}
                        />
                    </div>
                </div>
                <div style={styles.formColumn}>
                    <p>Im an inventory sheet 1</p>
                    
                </div>
            </div>
            <NextButton/>
        </div>

    )
}
