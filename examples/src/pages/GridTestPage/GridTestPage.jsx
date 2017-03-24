import React from 'react';
import mrg from 'index.css';
import styles from './styles.css';

const GridTestPage = () => (
	<div className={mrg.grid}>
		<h2>Material Responsive Grid</h2>
		<p>Examples of using <a href="https://github.com/STORIS/material-responsive-grid">material-responsive-grid</a> to define responsive layouts.</p>

		<section>
			<h2>Lowest Specified Viewport Size</h2>
			<p>Sizes specified at lower viewport sizes carry forward, unless overridden.</p>
			<div className={mrg.row}>
				<div className={mrg['col-xs4-4']}>
					<div className={styles.box}>Full</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={mrg['col-xs4-1']}>
					<div className={styles.box}>Quarter</div>
				</div>
				<div className={mrg['col-xs4-3']}>
					<div className={styles.box}>Three-quarters</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={mrg['col-xs4-2']}>
					<div className={styles.box}>Half</div>
				</div>
				<div className={mrg['col-xs4-2']}>
					<div className={styles.box}>Half</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={mrg['col-xs4-3']}>
					<div className={styles.box}>Three-quarters</div>
				</div>
				<div className={mrg['col-xs4-1']}>
					<div className={styles.box}>Quarter</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={mrg['col-xs4-4']}>
					<div className={styles.box}>Full</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row">
        <div class="col-xs4-4">Full</div>
     </div>
     <div class="row">
        <div class="col-xs4-1">Quarter</div>
        <div class="col-xs4-3">Three-quarters</div>
     </div>
     <div class="row">
        <div class="col-xs4-2">Half</div>
        <div class="col-xs4-2">Half</div>
     </div>
     <div class="row">
        <div class="col-xs4-3">Three-quarters</div>
        <div class="col-xs4-1">Quarter</div>
     </div>
     <div class="row">
        <div class="col-xs4-4">Full</div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Responsively Sized Columns</h2>
			<p>Three columns that are sized differently for various viewport sizes</p>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-4']} ${mrg['col-sm8-2']} ${mrg['col-sm-4']} ${mrg['col-md-2']} ${mrg['col-lg-1']} ${mrg['col-xl-1']}`}>
					<div className={styles.box}>1st</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['col-sm8-4']} ${mrg['col-sm-4']} ${mrg['col-lg-10']} ${mrg['col-xl-2']}`}>
					<div className={styles.box}>2nd</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['col-sm8-2']} ${mrg['col-sm-4']} ${mrg['col-md-6']} ${mrg['col-lg-1']} ${mrg['col-xl-9']}`}>
					<div className={styles.box}>3rd</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div className={mrg.row}>
        <div class="col-xs4-4 col-sm8-2 col-sm-4 col-md-2 col-lg-1 col-xl-1">
           1st
        </div>
        <div class="col-xs4-2 col-sm8-4 col-sm-4 col-lg-10 col-xl-2">
           2nd
        </div>
        <div class="col-xs4-2 col-sm8-2 col-sm-4 col-md-6 col-lg-1 col-xl-9">
           3rd
        </div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Offset Columns</h2>
			<p>
				Columns that are positioned by specifying an offset, which skips the specified
				number of columns
			</p>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-offset-3']} ${mrg['col-xs4-1']}`}>
					<div className={styles.box}>1st</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-offset-2']} ${mrg['col-xs4-2']}`}>
					<div className={styles.box}>2nd</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-offset-1']} ${mrg['col-xs4-3']}`}>
					<div className={styles.box}>3rd</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-offset-0']} ${mrg['col-xs4-4']}`}>
					<div className={styles.box}>4th</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row">
        <div class="col-xs4-offset-3 col-xs4-1">
     </div>
     <div class="row">
        <div class="col-xs4-offset-2 col-xs4-2">
     </div>
     <div class="row">
        <div class="col-xs4-offset-1 col-xs4-3">
     </div>
     <div class="row">
        <div class="col-xs4-offset-0 col-xs4-4">
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Horizontal Alignment</h2>
			<p>Align columns within a row horizontally</p>
			<div className={`${mrg.row} ${mrg['start-xs4']}`}>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Start 1</div>
				</div>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Start 2</div>
				</div>
			</div>
			<div className={`${mrg.row} ${mrg['center-xs4']}`}>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Center 1</div>
				</div>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Center 2</div>
				</div>
			</div>
			<div className={`${mrg.row} ${mrg['end-xs4']}`}>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>End 1</div>
				</div>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>End 2</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row start-xs4">
        <div class="col-xs4-1">Start 1</div>
        <div class="col-xs4-1">Start 2</div>
     </div>
     <div class="row center-xs4">
        <div class="col-xs4-1">Center 1</div>
        <div class="col-xs4-1">Center 2</div>
     </div>
     <div class="row end-xs4">
        <div class="col-xs4-1">End 1</div>
        <div class="col-xs4-1">End 2</div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Vertical Alignment</h2>
			<p>Align columns within a row vertically</p>
			<div className={`${mrg.row} ${mrg['top-xs4']}`}>
				<div className={`${mrg['col-xs4-2']}`}>
					<div className={`${styles.box} ${styles['box-tall']}`} />
				</div>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Top 1</div>
				</div>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Top 2</div>
				</div>
			</div>
			<div className={`${mrg.row} ${mrg['middle-xs4']}`}>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Middle 1</div>
				</div>
				<div className={`${mrg['col-xs4-2']}`}>
					<div className={`${styles.box} ${styles['box-tall']}`} />
				</div>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Middle 2</div>
				</div>
			</div>
			<div className={`${mrg.row} ${mrg['bottom-xs4']}`}>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Bottom 1</div>
				</div>
				<div className={`${mrg['col-xs4-1']}`}>
					<div className={styles.box}>Bottom 2</div>
				</div>
				<div className={`${mrg['col-xs4-2']}`}>
					<div className={`${styles.box} ${styles['box-tall']}`} />
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row top-xs4">
        <div class="col-xs4-2">
           Tall!<br />
        </div>
        <div class="col-xs4-1">Top 1</div>
        <div class="col-xs4-1">Top 2</div>
     </div>
     <div class="row top-xs4">
        <div class="col-xs4-1">Middle 1</div>
        <div class="col-xs4-2">
           Tall!<br />
        </div>
        <div class="col-xs4-1">Middle 2</div>
     </div>
     <div class="row top-xs4">
        <div class="col-xs4-1">Bottom 1</div>
        <div class="col-xs4-1">Bottom 2</div>
        <div class="col-xs4-2">
           Tall!<br />
        </div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Reorder Columns</h2>
			<p>
				Columns can become the first or last in the row.  Column position is based on the
				Row&apos;s flow direction, which can be reversed.
			</p>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']} ${mrg['first-xs4']}`}>
					<div className={styles.box}><acronym title="first">6</acronym></div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']} ${mrg['last-xs4']}`}>
					<div className={styles.box}><acronym title="last">1</acronym></div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row">
        <div class="col-xs4-1 col-sm8-1 col-sm-2">1</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">2</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">3</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">4</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">5</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">6</div>
     </div>
     <div class="row">
        <div class="col-xs4-1 col-sm8-1 col-sm-2">1</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">2</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">3</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">4</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">5</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2 first-xs4">6</div>
     </div>
     <div class="row">
        <div class="col-xs4-1 col-sm8-1 col-sm-2 last-xs4">1</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">2</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">3</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">4</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">5</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">6</div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Reversing a Row</h2>
			<p>
				Rows can be reversed.  This changes the flow direction, which affects columns that
				have been changed to be first or last.
			</p>
			<div className={`${mrg.row} ${mrg.reverse}`}>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</div>
			</div>
			<div className={`${mrg.row} ${mrg.reverse}`}>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']} ${mrg['first-xs4']}`}>
					<div className={styles.box}><acronym title="first">6</acronym></div>
				</div>
			</div>
			<div className={`${mrg.row} ${mrg.reverse}`}>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']} ${mrg['last-xs4']}`}>
					<div className={styles.box}><acronym title="last">1</acronym></div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</div>
				<div className={`${mrg['col-xs4-1']} ${mrg['col-sm8-1']} ${mrg['col-sm-2']}`}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row reverse">
        <div class="col-xs4-1 col-sm8-1 col-sm-2">1</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">2</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">3</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">4</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">5</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">6</div>
     </div>
     <div class="row reverse">
        <div class="col-xs4-1 col-sm8-1 col-sm-2">1</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">2</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">3</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">4</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">5</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2 first-xs4">6</div>
     </div>
     <div class="row reverse">
        <div class="col-xs4-1 col-sm8-1 col-sm-2 last-xs4">1</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">2</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">3</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">4</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">5</div>
        <div class="col-xs4-1 col-sm8-1 col-sm-2">6</div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Hidden</h2>
			<p>Columns can be hidden for specific viewport sizes (or a range of viewport sizes)</p>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-4']} ${mrg['hidden-xs8-up']}`}>
					<div className={styles.box}>if xs4, visible</div>
				</div>
				<div className={`${mrg['col-xs4-4']} ${mrg['hidden-xs4-down']} ${mrg['hidden-sm8-up']}`}>
					<div className={styles.box}>if xs8, visible</div>
				</div>
				<div className={`${mrg['col-xs4-4']} ${mrg['hidden-xs8-down']} ${mrg['hidden-sm-up']}`}>
					<div className={styles.box}>if sm8, visible</div>
				</div>
				<div className={`${mrg['col-xs4-4']} ${mrg['hidden-sm8-down']} ${mrg['hidden-md-up']}`}>
					<div className={styles.box}>if sm12, visible</div>
				</div>
				<div className={`${mrg['col-xs4-4']} ${mrg['hidden-sm-down']} ${mrg['hidden-lg-up']}`}>
					<div className={styles.box}>if md12, visible</div>
				</div>
				<div className={`${mrg['col-xs4-4']} ${mrg['hidden-md-down']} ${mrg['hidden-xl-up']}`}>
					<div className={styles.box}>if lg12, visible</div>
				</div>
				<div className={`${mrg['col-xs4-4']} ${mrg['hidden-lg-down']}`}>
					<div className={styles.box}>if xl12, visible</div>
				</div>
			</div>
			<div className={mrg.row}>
				<div className={`${mrg['col-xs4-2']} ${mrg['hidden-xs4-only']}`}>
					<div className={styles.box}>if xs4, hidden</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['hidden-xs8-only']}`}>
					<div className={styles.box}>if xs8, hidden</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['hidden-sm8-only']}`}>
					<div className={styles.box}>if sm8, hidden</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['hidden-sm-only']}`}>
					<div className={styles.box}>if sm12, hidden</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['hidden-md-only']}`}>
					<div className={styles.box}>if md12, hidden</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['hidden-lg-only']}`}>
					<div className={styles.box}>if lg12, hidden</div>
				</div>
				<div className={`${mrg['col-xs4-2']} ${mrg['hidden-xl-only']}`}>
					<div className={styles.box}>if xl12, hidden</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row">
        <div class="col-xs4-4 hidden-xs8-up">
           if xs4, visible
        </div>
        <div class="col-xs4-4 hidden-xs4-down hidden-sm8-up">
           if xs8, visible
        </div>
        <div class="col-xs4-4 hidden-xs8-down hidden-sm-up">
           if sm8, visible
        </div>
        <div class="col-xs4-4 hidden-sm8-down hidden-md-up">
           if sm12, visible
        </div>
        <div class="col-xs4-4 hidden-sm-down hidden-lg-up">
           if md12, visible
        </div>
        <div class="col-xs4-4 hidden-md-down hidden-xl-up">
           if lg12, visible
        </div>
        <div class="col-xs4-4 hidden-lg-down">
           if xl12, visible
        </div>
     </div>
     <div class="row">
        <div class="col-xs4-2 col-sm-2 hidden-xs4-only">
           if xs4, hidden
        </div>
        <div class="col-xs4-2 col-sm-2 hidden-xs8-only">
           if xs8, hidden
        </div>
        <div class="col-xs4-2 col-sm-2 hidden-sm8-only">
           if sm8, hidden
        </div>
        <div class="col-xs4-2 col-sm-2 hidden-sm-only">
           if sm12, hidden
        </div>
        <div class="col-xs4-2 col-sm-2 hidden-md-only">
           if md12, hidden
        </div>
        <div class="col-xs4-2 col-sm-2 hidden-lg-only">
           if lg12, hidden
        </div>
        <div class="col-xs4-2 col-sm-2 hidden-xl-only">
           if xl12, hidden
        </div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Fixed Width Grids</h2>
			<p>At 1600 dp, <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints">Material Design</a> allows a grid to either fill their container or remain at fixed width (left aligned or centered).</p>
			<div className={mrg.grid}>
				<div className={mrg.row}>
					<div className={mrg['col-xs4-4']}>
						<div className={styles.box}>Fluid (default)</div>
					</div>
				</div>
			</div>
			<div className={`${mrg.grid} ${mrg['fixed-left']}`}>
				<div className={mrg.row}>
					<div className={mrg['col-xs4-4']}>
						<div className={styles.box}>Fixed width, aligned left</div>
					</div>
				</div>
			</div>
			<div className={`${mrg.grid} ${mrg['fixed-center']}`}>
				<div className={mrg.row}>
					<div className={mrg['col-xs4-4']}>
						<div className={styles.box}>Fixed width, aligned center</div>
					</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row">
        <div class="col-xs4-4">
           Fluid (default)
        </div>
     </div>
  </div>
  <div class="grid grid-fixed-left">
     <div class="row">
        <div class="col-xs4-4">
           Fixed width, aligned left
        </div>
     </div>
  </div>
  <div class="grid grid-fixed-center">
     <div class="row">
        <div class="col-xs4-4">
           Fixed width, aligned center
        </div>
     </div>
  </div>`}</pre>
		</section>

		<section>
			<h2>Marginless Grid</h2>
			<p>
				By default, grids have a margin that preserves the outer padding on edge-adjacent
				columns and prevents a row of content from spanning edge to edge.  A marginless
				grid eliminates this outer padding.
			</p>
			<div className={mrg.grid}>
				<div className={mrg.row}>
					<div className={`${mrg['col-xs4-4']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Default Grid
						</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Outer
						</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Inner
						</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Inner
						</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Outer
						</div>
					</div>
				</div>
			</div>
			<div className={`${mrg.grid} ${mrg.marginless}`}>
				<div className={mrg.row}>
					<div className={`${mrg['col-xs4-4']} ${styles['box-other']}`}>
						<div className={styles.inner}>Marginless Grid</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Outer
						</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Inner
						</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Inner
						</div>
					</div>
					<div className={`${mrg['col-xs4-1']} ${styles['box-other']}`}>
						<div className={styles.inner}>
							Outer
						</div>
					</div>
				</div>
			</div>
			<pre className={styles.code}>{`  <div class="grid">
     <div class="row">
        <div class="col-xs4-4">
           Default Grid
        </div>
        <div class="col-xs4-1">
           Outer
        </div>
        <div class="col-xs4-1">
           Inner
        </div>
        <div class="col-xs4-1">
           Inner
        </div>
        <div class="col-xs4-1">
           Outer
        </div>
     </div>
  </div>
  <div class="grid marginless">
     <div class="row">
        <div class="col-xs4-4">
           Marginless Grid
        </div>
        <div class="col-xs4-1">
           Outer
        </div>
        <div class="col-xs4-1">
           Inner
        </div>
        <div class="col-xs4-1">
           Inner
        </div>
        <div class="col-xs4-1">
           Outer
        </div>
     </div>
  </div>`}</pre>
		</section>

	</div>
	);

export default GridTestPage;
